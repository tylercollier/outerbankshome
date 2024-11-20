<script>
	import { formatDollarsOnly } from '$lib/money';
	import { formatAddressForGoogleMaps, formatAddressLine1 } from '$lib/address';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { isClosed as isListingClosed, sqftTotal } from '$lib/listing';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';

	export let listing;

	$: addressLine1 = formatAddressLine1(listing);
	$: isClosed = isListingClosed(listing);
	$: sqft = sqftTotal(listing);
	$: formattedAddress = formatAddressForGoogleMaps(listing);
</script>

<div class="flex flex-col xl:flex-row gap-4 border">
	<div>
		<ImageCarousel images={listing.Media} />
	</div>
	<div>
		<div class="mb-4">
			<div class="flex flex-start flex-row gap-4 p-2 mb-0">
				<div class="w-1/2 lg:w-2/3">
					<div class="pb-4">{isClosed ? 'Closing' : 'Asking'} Price: <br />
						<span class="text-3xl font-bold">{formatDollarsOnly(listing.ListPrice)}</span></div>

					<div>{addressLine1},
						{listing.City}, NC {listing.PostalCode}</div>
				</div>
				<div class="w-1/2 lg:w-1/3">
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
			<div class="flex flex-row gap-4 p-2 mb-2">
				<div class="w=1/2"><span class="font-bold">MLS #:</span> {listing.ListingId}</div>
				<div class="w=1/2"><span class="font-bold">Status:</span> {listing.StandardStatus}</div>
			</div>
		</div>

		<div class="border border-solid border-slate-400">
			<GoogleMaps lat={listing.Latitude} lng={listing.Longitude} title={formattedAddress} />
		</div>
		<!-- Shannon plans to ask Greg if he wants the date here -->
		<!--<div>{isClosed ? 'Closing' : 'Status'} Date: {formatDate(listing.ModificationTimestamp)}</div>-->
	</div>

</div>
