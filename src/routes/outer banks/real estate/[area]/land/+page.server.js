import { error } from '@sveltejs/kit';
import { getSearchResultListings } from '$lib/db';

export const load = async ({ params }) => {
	// const allowedAreas = [
	// 	'corolla',
	// ];
	const area = params.area;
	// if (!allowedAreas.includes(area)) {
	// 	error(404, 'Not found');
	// }

	const listings = await getSearchResultListings('Land', (queryBuilder) => {
		return queryBuilder
			.where('StandardStatus', '=', 'Active')
			.where('City', '=', area)
			// .where('PropertySubType', 'in', ['Condominium', 'Townhouse'])
	});
	console.log('listings', listings)

	return {
		area,
		listings,
	}
};