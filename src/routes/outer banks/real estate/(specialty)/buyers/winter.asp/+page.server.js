import { getSearchResultListings } from '$lib/server/db.js';

export const load = async () => {
	const listings = await getSearchResultListings('Land', queryBuilder => {
		return queryBuilder
			.where('Type', '=', 'Boat Slip')
	});
	return {
		listings,
	}
};
