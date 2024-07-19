import { return404IfInvalidCategory } from '$lib/nav';
import { filterActive, filterSold, getSearchResultListings } from '$lib/db';
import { getCity } from '$lib/area';

export const load = categoryParam => async ({ params }) => {
	const area = params.area;
	return404IfInvalidCategory(area, categoryParam);
	const city = getCity(area);
	const modifyQuery = (queryBuilder) => {
		return queryBuilder
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where('WaterfrontFeatures', 'in', ['["Ocean Front"]', '["Soundfront"]'])
	};
	const activeListings = await getSearchResultListings('Residential', filterActive(modifyQuery));
	const soldListings = await getSearchResultListings('Residential', filterSold(modifyQuery));
	return {
		area,
		activeListings,
		soldListings,
	}
};
