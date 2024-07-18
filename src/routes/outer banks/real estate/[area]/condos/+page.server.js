import { getSearchResultListings } from '$lib/db';
import { return404IfInvalidCategory } from '$lib/nav';
import { getCity } from '$lib/area';

export const load = async ({ params }) => {
	const area = params.area;
	return404IfInvalidCategory(area, 'condos');
	const city = getCity(area);
	const listings = await getSearchResultListings('Residential', (queryBuilder) => {
		return queryBuilder
			.where('StandardStatus', '=', 'Active')
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Condominium', 'Townhouse'])
	});
	return {
		area,
		listings,
	}
};