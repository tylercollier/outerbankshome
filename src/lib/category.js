import { return404IfInvalidCategory } from '$lib/nav.js';
import { getSearchResultListings } from '$lib/db.js';
import { getCity } from '$lib/area.js';

export const load = categoryParam => async ({ params }) => {
	const area = params.area;
	return404IfInvalidCategory(area, categoryParam);
	const city = getCity(area);
	const listings = await getSearchResultListings('Residential', (queryBuilder) => {
		return queryBuilder
			.where('StandardStatus', '=', 'Active')
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where('WaterfrontFeatures', 'in', ['["Ocean Front"]', '["Soundfront"]'])
	});
	return {
		area,
		listings,
	}
};
