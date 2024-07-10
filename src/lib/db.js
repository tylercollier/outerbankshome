import { Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2/promise';
import _ from 'lodash';

let db;

export function getDb() {
	if (!db) {
		const dialect = new MysqlDialect({
			pool: createPool(process.env.VITE_DB_CONNECTION_STRING).pool
		});

		db = new Kysely({
			dialect,
			// log: ['query', 'error'],
			// https://kysely.dev/docs/recipes/logging
			log(event) {
				if (event.level === "error") {
					console.error("Query failed : ", {
						durationMs: event.queryDurationMillis,
						error: event.error,
						sql: event.query.sql,
						params: event.query.parameters,
					});
				} else {
					console.log("Query executed : ", {
						durationMs: event.queryDurationMillis,
						sql: event.query.sql,
						params: event.query.parameters,
					});
				}
			}
		});
	}
	return db;
}

export async function getListing(mlsId) {
	const listing = await getDb()
		.selectFrom('Property')
		.where('ListingId', '=', mlsId)
		.selectAll()
		.executeTakeFirst();
	if (!listing) {
		return listing;
	}
	let media = await getDb()
		.selectFrom('Media')
		.where('ResourceRecordKey', '=', listing.ListingKey)
		.select(['Order', 'MediaURL'])
		.execute();
	if (!media.length) {
		media = [];
	}
	media = _.sortBy(media, 'Order');
	listing.Media = media;
	return listing;
}

export async function getSearchResultListings(propertyType, buildQueryFn) {
	let fieldNames = [
		'ListingId',
		'Property.ModificationTimestamp',
		'ListPrice',
		'PropertyType',
		'PublicRemarks',

		'StreetNumber',
		'StreetDirPrefix',
		'StreetName',
		'City',
		'StateOrProvince',
		'PostalCode',

		'MediaURL',
	];
	if (propertyType === 'Residential') {
		fieldNames = fieldNames.concat([
			'BedroomsTotal',
			'BathroomsFull',
			'Asking_Price_Per_SqFt',
		]);
	} else if (propertyType === 'Land') {
		fieldNames = fieldNames.concat([
			'LotSizeAcres',
		]);
	}
	let listingsQueryBuilder = getDb()
		.selectFrom('Property')
		.rightJoin('Media', 'Property.ListingKey', 'Media.ResourceRecordKey')
		.where('PropertyType', '=', propertyType)
		.where('Order', '=', 0)
		.select(fieldNames)
		.orderBy('Property.ModificationTimestamp', 'desc')
		.limit(3);
	listingsQueryBuilder = buildQueryFn(listingsQueryBuilder);
	const listings = await listingsQueryBuilder.execute();
	return listings;
}
