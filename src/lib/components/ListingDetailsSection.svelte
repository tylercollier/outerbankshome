<script>
	import { formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { formatAddressLine1 } from '$lib/address';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { isClosed as isListingClosed, sqftTotal } from '$lib/listing';
	import LdpButtons from '$lib/components/LdpButtons.svelte';

	export let listing;

	$: addressLine1 = formatAddressLine1(listing);
	$: isClosed = isListingClosed(listing);
	$: sqft = sqftTotal(listing);
</script>

<div class="flex flex-col lg:flex-row gap-4 border">
	<div><ImageCarousel images={listing.Media} /></div>
	<div class="mb-4">
		<div class="flex flex-start flex-row lg:flex-col gap-4 p-2 mb-4">
			<div class="w-1/2 lg:w-full">
				<div class="pb-4">{isClosed ? 'Closing' : 'Asking'} Price: <br />
				<span class="text-3xl font-bold">{formatDollarsOnly(listing.ListPrice)}</span></div>

				<div class="pb-4">{addressLine1}<br />
				{listing.City}, NC {listing.PostalCode}</div>

				<div><span class="font-bold">MLS #:</span> {listing.ListingId}</div>

				<div><span class="font-bold">Status:</span> {listing.StandardStatus}</div>
			</div>
			<div class="w-1/2 lg:w-full">
				<div class="border border-solid border-slate-300 my-2">
					<div class="flex flex-row">
						<div class="w-1/2 border border-solid border-l-0 border-t-0 border-slate-300 p-2 text-center">
							{listing.BedroomsTotal} bd
						</div>
						<div class="w-1/2 border border-solid border-l-0 border-r-0 border-t-0 border-slate-300 p-2 text-center">
							{listing.BathroomsFull} ba
						</div>
					</div>
					<div class="p-2 text-center">
						{sqft} sq ft
					</div>
				</div>
			</div>
		</div>
		<div>
			<LdpButtons class="flex-col" />
		</div>
		<!-- Shannon plans to ask Greg if he wants the date here -->
		<!--<div>{isClosed ? 'Closing' : 'Status'} Date: {formatDate(listing.ModificationTimestamp)}</div>-->
	</div>
</div>
