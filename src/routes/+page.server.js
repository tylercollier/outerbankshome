import { getSearchResultListings } from '$lib/server/db.js';
import { allowedAreas, getCity } from '$lib/area.js';

export const load = async () => {
	const listings = await getSearchResultListings('Residential', queryBuilder => {
		const cities = allowedAreas.map(areaParam => getCity(areaParam));
		return queryBuilder.where('City', 'in', cities);
	});

	return {
		listings,
	}
}
