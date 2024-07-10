import { getSearchResultListings } from '$lib/db';

export const load = async ({ params }) => {
	const area = params.area;
	const listings = await getSearchResultListings('Land', (queryBuilder) => {
		return queryBuilder
			.where('StandardStatus', '=', 'Active')
			.where('City', '=', area)
	});
	return {
		area,
		listings,
	}
};