import { makeAddressSlug } from '$lib/address.js';
import urljoin from 'url-join';

export function prettyJsonList(jsonList) {
	return JSON.parse(jsonList).join(', ');
}

export function makeLinkForListing(listing, options = {}) {
	const slug = makeAddressSlug(listing);
	const link = `${listing.ListingId}-${slug}.asp`
	const linkBase = '/outer banks/real estate';
	const url = urljoin(linkBase, options.urlInfix ?? '', link);
	return url;
}

export function sqftAsStr(listing) {
	if (!listing.Asking_Price_Per_SqFt) {
		return '?'
	}
	return Math.round(listing.ListPrice / listing.Asking_Price_Per_SqFt)
}
