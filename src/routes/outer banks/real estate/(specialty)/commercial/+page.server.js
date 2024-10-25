import { getSearchResultListings } from '$lib/server/db.js';

export const load = async () => {
	const listings = await getSearchResultListings('INDUSTRIAL', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', '=', 'Restaurant')
	});
	return {
		listings,
	}
};
