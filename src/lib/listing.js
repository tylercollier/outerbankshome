import { makeAddressSlug } from '$lib/address.js';
import urljoin from 'url-join';

export function prettyJsonList(jsonList) {
	if (!jsonList) {
		return '';
	}
	return JSON.parse(jsonList).join(', ');
}

export function makeLinkForListing(listing, options = {}) {
	const slug = makeAddressSlug(listing);
	const link = `${listing.ListingId}-${slug}.asp`
	const linkBase = '/outer banks/real estate';
	const url = urljoin(linkBase, options.urlInfix ?? '', link);
	return url;
}

export function sqftTotal(listing) {
	return Number(listing.HtdLvArSF) + Number(listing.Unheated_LvArSF);
}
