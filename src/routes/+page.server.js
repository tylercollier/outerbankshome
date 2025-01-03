import { getSearchResultListings } from '$lib/server/db';
import { allowedAreas, getCity } from '$lib/area';

export const load = async () => {
	const listings = await getSearchResultListings('Residential', queryBuilder => {
		const cities = allowedAreas.map(areaParam => getCity(areaParam));
		queryBuilder = queryBuilder
			.where('DaysOnMarket', '>=', 0)
			.where('DaysOnMarket', '<=', 3)
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where('Property.StandardStatus', '=', 'Active')
		;
		return queryBuilder.where('City', 'in', cities);
	});

	return {
		listings,
	};
};
