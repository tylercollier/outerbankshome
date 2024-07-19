<script>
	import { makeLinkForListing, sqftTotal } from '$lib/listing';
	import { formatAddress } from '$lib/address';
	import { formatDollarsOnly } from '$lib/money';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	import { formatDate } from '$lib/date';

	export let listing;
	export let urlInfix = '';

	const link = makeLinkForListing(listing, { urlInfix });
	const address = formatAddress(listing);
	const maxLength = 200;
	const publicRemarks =
		listing.PublicRemarks?.length < maxLength
			? listing.PublicRemarks
			: `${listing.PublicRemarks?.substring(0, maxLength)}...`;
	const sqft = sqftTotal(listing);
	const isSold = listing.StandardStatus === 'Closed';
</script>

<div class="flex justify-between items-center">
	<div>
		<div><a href={link}>{address}</a></div>
		<div class:font-bold={!isSold}>Asking: {formatDollarsOnly(listing.ListPrice)}</div>
		{#if isSold}
			<div class="font-bold">{formatDollarsOnly(listing.ClosePrice)} Closing Date {formatDate(listing.CloseDate)}</div>
		{/if}
		{#if listing.PropertyType === 'Residential'}
			<div>
				Beds-{listing.BedroomsTotal} Baths-{listing.BathroomsFull}
				{#if sqft}
					SqFt: {sqft}
				{/if}
			</div>
		{:else if listing.PropertyType === 'Land'}
			{#if listing.LotSizeAcres}
				<div>Lot Size: {listing.LotSizeAcres} acres</div>
			{/if}
		{/if}
		<div>
			{publicRemarks}
			{#if listing.PublicRemarks?.length > maxLength}
				<a href={link}>MORE</a>
			{/if}
		</div>
		{#if !isSold}
			<div><span class="font-bold">Call Agent</span> 800-647-1868</div>
		{/if}
	</div>
	<div>
		<a href={link}>
			<img use:lazyImage data-src={listing.MediaURL} class="max-w-[120px] max-h-[90px]" alt="" />
		</a>
	</div>
</div>
