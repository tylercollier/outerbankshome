<script>
	import { formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { formatAddressLine1 } from '$lib/address';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	export let listing;

	$: addressLine1 = formatAddressLine1(listing);
</script>

<div class="mb-4" style="width: min(500px, 95vw)">
	<div class="flex justify-between">
		<div>
			<div>MLS #: {listing.ListingId}</div>
			<div>{addressLine1}</div>
			<div>{listing.City}, NC {listing.PostalCode}</div>
		</div>
		<div class="text-right">
			<div>Asking Price: {formatDollarsOnly(listing.ListPrice)}</div>
			<div>Status: {listing.StandardStatus}</div>
			<div>Status Date: {formatDate(listing.ModificationTimestamp)}</div>
		</div>
	</div>
</div>

<ImageCarousel images={listing.Media} />
