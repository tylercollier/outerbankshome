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
