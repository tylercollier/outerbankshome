  import { getSearchResultListings } from '$lib/server/db.js';


export const load = async () => {
	const listings = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Co-Ownership (5 Weeks +)'])
			;
	});
	return {
		listings,
	};
}
