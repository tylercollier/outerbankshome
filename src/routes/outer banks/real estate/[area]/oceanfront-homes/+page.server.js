import { filterActive, filterSold, getSearchResultListings } from '$lib/db';
import { return404IfInvalidCategory } from '$lib/nav';
import { getCity } from '$lib/area';

export const load = async ({ params }) => {
	const areaParam = params.area;
	return404IfInvalidCategory(areaParam, 'oceanfront-homes');
	const city = getCity(areaParam);
	const modifyQuery = (queryBuilder) => {
		return queryBuilder
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where('WaterfrontFeatures', 'in', ['["Ocean Front"]']);
	};
	const activeListings = await getSearchResultListings('Residential', filterActive(modifyQuery));
	const soldListings = await getSearchResultListings('Residential', filterSold(modifyQuery));
	return {
		areaParam,
		activeListings,
		soldListings,
	};
};
