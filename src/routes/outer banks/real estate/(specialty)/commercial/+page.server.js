import { getSearchResultListings } from '$lib/server/db.js';

export const load = async () => {
	const listingsWithMeta = await getSearchResultListings('COMMERCIAL/INDUSTRIAL', queryBuilder => {
		return queryBuilder
			// .where('PropertySubType', '=', 'Restaurant')
	});
	return {
		listingsWithMeta,
	}
};
