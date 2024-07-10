<script>
	import { formatAddress } from '$lib/address';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';

	export let data;

	const { listing } = data;
	const address = formatAddress(listing);
</script>

<svelte:head>
	<title>{address} is for sale.</title>
</svelte:head>

<main>
	<h2>Listing Details For {address}</h2>

	<div>
		<div>MLS: {listing.ListingId}</div>
		<div>Asking Price: {formatDollarsOnly(listing.ListPrice)}</div>
		<div>Status: {listing.StandardStatus}</div>
		<div>Status Date: {formatDate(listing.ModificationTimestamp)}</div>
	</div>

	<ImageCarousel images={listing.Media} />

	<div>
		<h3>Listing Information</h3>

		<table>
			<tbody>
			{#if listing.Headline}
				<tr>
					<td>Headline</td>
					<td>{listing.Headline}</td>
				</tr>
			{/if}
			<tr>
				<td>Area</td>
				<td>{listing.MLSAreaMinor}</td>
			</tr>
			<tr>
				<td>Beds</td>
				<td>{listing.BedroomsTotal}</td>
			</tr>
			<tr>
				<td>Baths</td>
				<td>{listing.BathroomsFull}</td>
			</tr>
			<tr>
				<td>Asking Price</td>
				<td>{formatDollarsOnly(listing.ListPrice)}</td>
			</tr>
			</tbody>
		</table>
	</div>

	<div>
		<h3>Building Details</h3>

		<table>
			<tbody>
			{#if listing.InteriorFeatures}
				<tr>
					<td>Interior Features</td>
					<td>{prettyJsonList(listing.InteriorFeatures)}</td>
				</tr>
			{/if}
			</tbody>
		</table>
	</div>

	<div>
		<h3>Listing Agent Remarks</h3>

		<div>{listing.PublicRemarks}</div>
	</div>
</main>
