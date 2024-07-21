<script>
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';

	export let listing;
	function blankNull(val) {
		if (val === null) {
		return '';
		}
		return val;
	}
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
		<tr>
			<td>Area</td>
			<td>{listing.MLSAreaMinor}</td>
		</tr>
		<tr>
			<td>Mls Status</td>
			<td>{listing.StandardStatus}</td>
		</tr>
		<tr>
			<td>Days On Market</td>
			<td>{blankNull(listing.DaysOnMarket)}</td>
		<tr>
			<td>Cumulative Days On Market</td>
			<td>{listing.CumulativeDaysOnMarket}</td>
		<tr>
			<td>Listing Price</td>
			<td>{formatDollarsOnly(listing.ListPrice)}</td>
		<tr>
			<td>Original Listing Price</td>
			<td>{formatDollarsOnly(listing.OriginalListPrice)}</td>
		<tr>
			<td>Possession</td>
			<td>{prettyJsonList(listing.Possession)}</td>
		<tr>
			<td>Short Sale</td>
			<td>{listing.PShortSale}</td>
		<tr>
			<td>Price Date</td>
			<td>{listing.Price_Date}</td>
		<tr>
			<td>Furnishing Available</td>
			<td>{listing.Furnishings_Available_Y_Or_N}</td>
		<tr>
			<td>Bill Of Sale Amount</td>
			<td>{blankNull(listing.Bill_of_Sale_In_Amt__Y_Or_N)}</td>
		<tr>
			<td>Expiration Date</td>
			<td>{blankNull(listing.ExpirationDate)}</td>
		<tr>
			<td>Ownership</td>
			<td>{listing.Ownership}</td>
		<tr>
			<td>Listing Restrictions</td>
			<td>{blankNull(listing.O_LISTING_RESTRICTIONS)}</td>
		<tr>
			<td>Listing Type</td>
			<td>{listing.ListingAgreement}</td>
		</tbody>
	</table>
</div>

<div>
	<h3>Building Details</h3>

	<table>
		<tbody>
			<tr>
				<td>Heated Living Area</td>
				<td>{listing.HtdLvArSF}</td>
			</tr>
			<tr>
				<td>Interior Features</td>
				<td>{prettyJsonList(listing.InteriorFeatures)}</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Listing Agent Remarks</h3>

	<div>{listing.PublicRemarks}</div>
</div>
