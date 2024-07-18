import { allowedSubdivisions, getCity } from '$lib/area';
import { getSearchResultListings } from '$lib/db';

export const trailingSlash = 'never';

export const load = async ({ params }) => {
	const subdivision = allowedSubdivisions[params.area].find(x => x.slug === params.subdivision);
	const area = params.area;
	const city = getCity(area);
	const listings = await getSearchResultListings('Residential', (queryBuilder) => {
		return queryBuilder
			.where('StandardStatus', '=', 'Active')
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where('SubdivisionName', '=', subdivision.name)
	});
	return {
		area,
		listings,
		subdivision,
	}
};