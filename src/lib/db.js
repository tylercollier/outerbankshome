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

export async function getListingsForArea(area, propertySubTypes) {
	const fieldNames = [
		'ListingId',
		'Property.ModificationTimestamp',
		'ListPrice',
		'BedroomsTotal',
		'BathroomsFull',
		'PublicRemarks',
		'Asking_Price_Per_SqFt',

		'StreetNumber',
		'StreetDirPrefix',
		'StreetName',
		'City',
		'StateOrProvince',
		'PostalCode',

		'MediaURL',
	];
	const listings = await getDb()
		.selectFrom('Property')
		.rightJoin('Media', 'Property.ListingKey', 'Media.ResourceRecordKey')
		.where('StandardStatus', '=', 'Active')
		.where('City', '=', area)
		.where('PropertyType', '=', 'Residential')
		.where('PropertySubType', 'in', propertySubTypes)
		.where('WaterfrontFeatures', 'in', ['["Ocean Front"]', '["Soundfront"]'])
		.where('Order', '=', 0)
		.select(fieldNames)
		.orderBy('ModificationTimestamp', 'desc')
		.limit(3)
		.execute();
	return listings;
}
