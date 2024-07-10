export function formatAddress(listing) {
	const fieldNames = [
		'StreetNumber',
		'StreetDirPrefix',
		'StreetName',
	];
	const values = fieldNames.map(x => listing[x])
		.filter(x => x);
	let address = values.join(' ');
	address += ' in ' + listing.City;
	return address;
}

export function getMlsIdFromRoute(addressParam) {
	const matches = addressParam.match(/(\d+)-.*/);
	if (matches) {
		return matches[1];
	}
	return null;
}