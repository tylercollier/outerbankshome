import { makeAddressSlug } from '$lib/address';
import { basePath } from '$lib/nav';
import urljoin from 'url-join';

export function prettyJsonList(jsonList) {
	if (!jsonList) {
		return '';
	}
	return JSON.parse(jsonList).join(', ');
}

export function makeLinkForListing(listing, options = {}) {
	const slug = makeAddressSlug(listing);
	const link = `${listing.ListingId}-${slug}.asp`;
	const url = urljoin(basePath, options.urlInfix ?? '', link);
	return url;
}

export function sqftTotal(listing) {
	return Number(listing.HtdLvArSF) + Number(listing.Unheated_LvArSF);
}

export function maybeBlank(val) {
	if (!val) {
		return '';
	}
	return val;
}
