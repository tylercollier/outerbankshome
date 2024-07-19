import { filterActive, filterSold, getSearchResultListings } from '$lib/db';
import { getCity } from '$lib/area';

export const load = async ({ params }) => {
	const area = params.area;
	const city = getCity(area);
	const modifyQuery = (queryBuilder) => {
		return queryBuilder
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
	};
	const activeListings = await getSearchResultListings('Residential', filterActive(modifyQuery));
	const soldListings = await getSearchResultListings('Residential', filterSold(modifyQuery));
	return {
		area,
		activeListings,
		soldListings,
	}
};