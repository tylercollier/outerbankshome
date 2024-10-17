<script>
	import { formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { formatAddressLine1 } from '$lib/address';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { isClosed as isListingClosed } from '$lib/listing';
	import LdpButtons from '$lib/components/LdpButtons.svelte';

	export let listing;

	$: addressLine1 = formatAddressLine1(listing);
	$: isClosed = isListingClosed(listing);
</script>

<div class="flex gap-6">
	<div><ImageCarousel images={listing.Media} /></div>
	<div class="mb-4">
		<div class="pb-4">{isClosed ? 'Closing' : 'Asking'} Price: <br />
		<span class="text-3xl font-bold">{formatDollarsOnly(listing.ListPrice)}</span></div>
		
		<div class="pb-4">{addressLine1}<br />
		{listing.City}, NC {listing.PostalCode}</div>
		
		<div><span class="font-bold">MLS #:</span> {listing.ListingId}</div>
		
		<div><span class="font-bold">Status:</span> {listing.StandardStatus}</div>
		
		<div class="border border-solid border-slate-300 mt-6">
			<div class="flex flex-row">
				<div class="w-1/2 border border-solid border-l-0 border-t-0 border-slate-300 p-2 text-center">
				2 bd <!-- TYLER I NEED HELP MAKING THIS DYNAMIC -->
				</div>
				<div class="w-1/2 border border-solid border-l-0 border-r-0 border-t-0 border-slate-300 p-2 text-center">
				2 ba <!-- TYLER I NEED HELP MAKING THIS DYNAMIC -->
				</div>
			</div>
			<div class="p-2 text-center">
			1234 sq ft <!-- TYLER I NEED HELP MAKING THIS DYNAMIC -->
			</div>	
		</div>	
		
		<LdpButtons />
		<!--<div>{isClosed ? 'Closing' : 'Status'} Date: {formatDate(listing.ModificationTimestamp)}</div>-->	
	</div>
</div>