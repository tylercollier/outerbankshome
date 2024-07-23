import { slugify } from '$lib/url';

export function formatAddressLine1(listing) {
	const fieldNames = ['StreetNumber', 'StreetDirPrefix', 'StreetName'];
	const values = fieldNames.map(x => listing[x]).filter(x => x);
	const address = values.join(' ');
	return address;
}

export function formatAddress(listing) {
	let address = formatAddressLine1(listing);
	address += ' in ' + listing.City;
	return address;
}

export function getMlsIdFromRoute(addressParam) {
	const matches = addressParam.match(/^(\d+)-.*/);
	if (matches) {
		return matches[1];
	}
	return null;
}

export function makeAddressSlug(listing) {
	const fieldNames = [
		'StreetNumber',
		'StreetDirPrefix',
		'StreetName',
		'City',
		'StateOrProvince',
		'PostalCode',
	];
	const values = fieldNames
		.map(x => listing[x])
		.filter(x => x)
		.map(slugify);

	const slug = values.join('-');
	return slug;
}
