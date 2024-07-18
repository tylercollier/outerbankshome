function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getAreaNameFromParam(areaParam) {
	if (areaParam === 'KittyHawk') {
		return 'Kitty Hawk';
	} else if (areaParam === 'KillDevilHills') {
		return 'Kill Devil Hills';
	}
	return areaParam
		.split('-')
		.map(capitalizeFirstLetter)
		.join(' ');
}

export function getCity(areaParam) {
	return getAreaNameFromParam(areaParam);
}

export const allowedAreas = [
	'corolla',
	'duck',
	'southern-shores',
	'martins point',
	'KittyHawk',
	'KillDevilHills',
	'nags head',
	'manteo',
	'colington',
	'avon',
	'buxton',
	'frisco',
	'hatteras island',
	'rodanthe',
	'salvo',
	'waves',
];

export const allowedCategories = {
	corolla: [
		'',
		'condos',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
		'water-front-homes',
		'investment-homes',
		'land',
	],
	duck: [
		'',
		'condos',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
		'water-front-homes',
		'investment-homes',
		'land',
	],
	'southern-shores': [
		'',
		'condos',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
		'water-front-homes',
		'investment-homes',
		'land',
	],
	'martins point': [
		'Sold',
	],
	KittyHawk: [
		'',
		'condos',
		'Sold',
		'oceanfront-homes',
		'waterfront-homes',
		'land',
	],
	KillDevilHills: [
		'',
		'condos',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
		'waterfront',
		'investment-homes',
		'land',
	],
	'nags head': [
		'',
		'condos',
		'canalfront-homes',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
		'water-front-homes',
		'investment-homes',
		'land',
	],
	manteo: [
		'',
		'condos',
		'soundfront-homes',
		'Sold',
		'land',
	],
	colington: [
		'canalfront-homes',
		'soundfront-homes',
		'Sold',
		'waterfront-homes',
		'colington-harbour',
	],
	avon: [
		'canalfront-homes',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
	],
	buxton: [
		'canalfront-homes',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
	],
	frisco: [
		'canalfront-homes',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
	],
	'hatteras island': [
		'canalfront-homes',
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
	],
	rodanthe: [
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
	],
	salvo: [
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
	],
	waves: [
		'soundfront-homes',
		'Sold',
		'oceanfront-homes',
	],
};
