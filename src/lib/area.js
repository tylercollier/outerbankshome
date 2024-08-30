function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getAreaNameFromParam(areaParam) {
	if (areaParam === 'KittyHawk') {
		return 'Kitty Hawk';
	} else if (areaParam === 'KillDevilHills') {
		return 'Kill Devil Hills';
	}
	return (
		areaParam
			// Example splits:
			//   southern-shores
			//   nags head
			.split(/[ -]/)
			.map(capitalizeFirstLetter)
			.join(' ')
	);
}

export function getCity(areaParam) {
	return getAreaNameFromParam(areaParam);
}

export function getAreaParamFromCity(city) {
	// I'm not sure what effects this will have yet. But some listings have a null city.
	if (!city) {
		return null;
	}
	if (city === 'Kitty Hawk') {
		return 'KittyHawk';
	} else if (city === 'Kill Devil Hills') {
		return 'KillDevilHills';
	} else if (city === 'Southern Shores') {
		return 'southern-shores';
	}
	return city.toLowerCase();
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
