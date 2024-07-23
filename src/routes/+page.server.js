import { getSearchResultListings } from '$lib/server/db.js';
import { allowedAreas, getCity } from '$lib/area.js';

export const load = async () => {
	const listings = await getSearchResultListings('Residential', queryBuilder => {
		const cities = allowedAreas.map(areaParam => getCity(areaParam));
		return queryBuilder.where(expressionBuilder => {
			const cityExpressions = cities.map(city => {
				console.log('city', city)
				return expressionBuilder('City', '=', city)
			})
			console.log('cityExpressions', cityExpressions)
			return expressionBuilder.or(cityExpressions);
		});
	});

	return {
		listings,
	}
}
