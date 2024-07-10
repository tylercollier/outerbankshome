function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getAreaNameFromParam(areaParam) {
	return areaParam
		.split('-')
		.map(capitalizeFirstLetter)
		.join(' ');
}

export const allowedAreas = [
	'corolla',
];
