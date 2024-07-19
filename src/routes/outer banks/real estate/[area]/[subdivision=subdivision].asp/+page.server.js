import { allowedSubdivisions, getCity } from '$lib/area';
import { filterActive, filterSold, getSearchResultListings } from '$lib/db';

export const trailingSlash = 'never';

export const load = async ({ params }) => {
	const subdivision = allowedSubdivisions[params.area].find((x) => x.slug === params.subdivision);
	const areaParam = params.area;
	const city = getCity(areaParam);
	const modifyQuery = (queryBuilder) => {
		return queryBuilder
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where('SubdivisionName', '=', subdivision.name);
	};
	const activeListings = await getSearchResultListings('Residential', filterActive(modifyQuery));
	const soldListings = await getSearchResultListings('Residential', filterSold(modifyQuery));
	return {
		areaParam,
		activeListings,
		soldListings,
		subdivision,
	};
};
