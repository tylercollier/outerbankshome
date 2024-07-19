import { getAreaNameFromParam } from '$lib/area';

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
