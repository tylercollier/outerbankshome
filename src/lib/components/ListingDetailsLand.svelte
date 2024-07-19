<script>
	import { formatAddress } from '$lib/address';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';

	export let listing;
</script>

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
			<tr>
				<td>Type</td>
				<td>Residential</td>
			</tr>
			<tr>
				<td>Class</td>
				<td>LOTS/LAND</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Lot Details & Legal Description</h3>

	<table>
		<tbody>
			<tr>
				<td>Unit/Lot #</td>
				<td>{listing.Unit_Or_Lot_Number}</td>
			</tr>
			<tr>
				<td>Subdivision</td>
				<td>{listing.SubdivisionName}</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Listing Agent Remarks</h3>

	<div>{listing.PublicRemarks}</div>
</div>
