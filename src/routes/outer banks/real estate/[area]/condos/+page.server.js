import { getSearchResultListings } from '$lib/db';

export const load = async ({ params }) => {
	const area = params.area;
	const listings = await getSearchResultListings('Residential', (queryBuilder) => {
		return queryBuilder
			.where('StandardStatus', '=', 'Active')
			.where('City', '=', area)
			.where('PropertySubType', 'in', ['Condominium', 'Townhouse'])
	});
	return {
		area,
		listings,
	}
};