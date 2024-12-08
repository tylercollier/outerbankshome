  import { getSearchResultListings } from '$lib/server/db.js';


export const load = async () => {
	const listingsWithMeta = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Co-Ownership (5 Weeks +)'])
			;
	});
	return {
		listingsWithMeta,
	};
}
