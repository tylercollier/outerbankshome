import { filterActive, filterSold, getSearchResultListings } from '$lib/db';
import { return404IfInvalidCategory } from '$lib/nav';
import { getCity } from '$lib/area';

export const load = async ({ params }) => {
	const areaParam = params.area;
	return404IfInvalidCategory(areaParam, 'land');
	const city = getCity(areaParam);
	const modifyQuery = (queryBuilder) => {
		return queryBuilder.where('City', '=', city);
	};
	const activeListings = await getSearchResultListings('Land', filterActive(modifyQuery));
	const soldListings = await getSearchResultListings('Land', filterSold(modifyQuery));
	return {
		areaParam,
		activeListings,
		soldListings,
	};
};
