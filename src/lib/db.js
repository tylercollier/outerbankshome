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
			dialect
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
