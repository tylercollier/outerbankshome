import { filterActive, filterSold, getSearchResultListings } from '$lib/db';
import { getAreaNameFromParam, getCity } from '$lib/area';

export const categories = [
	'canalfront-homes',
	'condos',
	'land',
	'oceanfront-homes',
	'soundfront-homes',
	'water-front-homes',
	'waterfront',
	'waterfront-homes',
];

export async function getListings(areaParam, categoryParam) {
	const city = getCity(areaParam);
	let buildQueryFn;
	if (categoryParam === 'canalfront-homes') {
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

export function getTitleTag(areaParam, categoryParam) {
	const areaName = getAreaNameFromParam(areaParam);
	let partial;
	if (categoryParam === 'canalfront-homes') {
		partial = 'Canalfront Homes and Houses for Sale';
	} else if (categoryParam === 'condos') {
		partial = 'Condos and Town Houses for Sale';
	} else if (categoryParam === 'land') {
		partial = 'Lots & Land For Sale';
	} else if (categoryParam === 'oceanfront-homes') {
		partial = 'Oceanfront Homes for Sale';
	} else if (categoryParam === 'soundfront-homes') {
		partial = 'Soundfront Homes for Sale';
	} else if (['water-front-homes', 'waterfront', 'waterfront-homes'].includes(categoryParam)) {
		partial = 'Waterfront Homes For Sale';
	}
	return `${areaName} ${partial}`;
}

export function getH1(areaParam, categoryParam) {
	const areaName = getAreaNameFromParam(areaParam);
	let partial;
	if (categoryParam === 'canalfront-homes') {
		partial = 'Canalfront Homes For Sale';
	} else if (categoryParam === 'condos') {
		partial = 'Condos and Town Houses For Sale';
	} else if (categoryParam === 'land') {
		partial = 'Lots & Land For Sale';
	} else if (categoryParam === 'oceanfront-homes') {
		partial = 'Oceanfront Homes for Sale';
	} else if (categoryParam === 'soundfront-homes') {
		partial = 'Soundfront Homes for Sale';
	} else if (['water-front-homes', 'waterfront', 'waterfront-homes'].includes(categoryParam)) {
		partial = 'Water Front Homes';
	}
	return `${areaName} ${partial}`;
}
