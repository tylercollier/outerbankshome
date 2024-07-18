import { getSearchResultListings } from '$lib/db';
import { return404IfInvalidCategory } from '$lib/nav.js';
import { getCity } from '$lib/area.js';

export const load = async ({ params }) => {
	const area = params.area;
	return404IfInvalidCategory(area, 'land');
	const city = getCity(area);
	const listings = await getSearchResultListings('Land', (queryBuilder) => {
		return queryBuilder
			.where('StandardStatus', '=', 'Active')
			.where('City', '=', city)
	});
	return {
		area,
		listings,
	}
};