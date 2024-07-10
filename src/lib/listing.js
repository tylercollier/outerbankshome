import { makeAddressSlug } from '$lib/address.js';

export function prettyJsonList(jsonList) {
	return JSON.parse(jsonList).join(', ');
}

export function makeLinkForListing(listing) {
	const slug = makeAddressSlug(listing);
	const link = `${listing.ListingId}-${slug}.asp`
	return link;
}

export function sqftAsStr(listing) {
	if (!listing.Asking_Price_Per_SqFt) {
		return '?'
	}
	return Math.round(listing.ListPrice / listing.Asking_Price_Per_SqFt)
}
