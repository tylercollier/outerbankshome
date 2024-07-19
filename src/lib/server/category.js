import { getCity } from '$lib/area';
import { filterActive, filterSold, getSearchResultListings } from '$lib/server/db';
import { return404IfInvalidCategory } from '$lib/server/nav';
import { homeCategory } from '$lib/category';


export async function getListings(areaParam, categoryParam) {
	const city = getCity(areaParam);
	let buildQueryFn;
	if (categoryParam === homeCategory) {
		buildQueryFn = queryBuilder => {
			return queryBuilder
				.where('PropertySubType', 'in', ['Single Family Residence']);
		};
	} else if (categoryParam === 'canalfront-homes') {
		buildQueryFn = queryBuilder => {
			return queryBuilder
				.where('PropertySubType', 'in', ['Single Family Residence'])
				.where('WaterfrontFeatures', 'in', ['["Canal Front"]']);
		};
	} else if (categoryParam === 'condos') {
		buildQueryFn = queryBuilder => {
			return queryBuilder
				.where('PropertySubType', 'in', ['Condominium', 'Townhouse'])
		};
	} else if (categoryParam === 'land') {
		buildQueryFn = queryBuilder => {
			return queryBuilder
		};
	} else if (categoryParam === 'oceanfront-homes') {
		buildQueryFn = queryBuilder => {
			return queryBuilder
				.where('PropertySubType', 'in', ['Single Family Residence'])
				.where('WaterfrontFeatures', 'in', ['["Ocean Front"]']);
		};
	} else if (categoryParam === 'soundfront-homes') {
		buildQueryFn = queryBuilder => {
			return queryBuilder
				.where('PropertySubType', 'in', ['Single Family Residence'])
				.where('WaterfrontFeatures', 'in', ['["Soundfront"]']);
		};
	} else if (['water-front-homes', 'waterfront', 'waterfront-homes'].includes(categoryParam)) {
		buildQueryFn = queryBuilder => {
			return queryBuilder
				.where('PropertySubType', 'in', ['Single Family Residence'])
				.where('WaterfrontFeatures', 'in', ['["Ocean Front"]', '["Soundfront"]']);
		};
	}
	const prevBuildQueryFn = buildQueryFn;
	buildQueryFn = queryBuilder => {
		const qb = prevBuildQueryFn(queryBuilder);
		return qb.where('City', '=', city);
	}
	const propertyType = categoryParam === 'land' ? 'Land' : 'Residential';
	const activeListings = await getSearchResultListings(propertyType, filterActive(buildQueryFn));
	const soldListings = await getSearchResultListings(propertyType, filterSold(buildQueryFn));
	return {
		activeListings,
		soldListings,
	};
}

export const load = async (areaParam, categoryParam) => {
	return404IfInvalidCategory(areaParam, categoryParam);
	const { activeListings, soldListings } = await getListings(areaParam, categoryParam);
	return {
		areaParam,
		categoryParam,
		activeListings,
		soldListings,
	};
}
