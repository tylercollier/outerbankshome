import { getSearchResultListings } from '$lib/server/db';
import { allowedAreas, getCity } from '$lib/area';

export const load = async () => {
	const listingsWithMeta = await getSearchResultListings('Residential', queryBuilder => {
		const cities = allowedAreas.map(areaParam => getCity(areaParam));
		return queryBuilder.where('City', 'in', cities);
	});

	return {
		listingsWithMeta,
	};
};
