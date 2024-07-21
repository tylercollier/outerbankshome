<script>
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { formatDollarsOnly, formatDollarsAndCents } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';

	export let listing;
	function maybeBlank(val) {
		if (!val) {
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
			<td>{maybeBlank(listing.DaysOnMarket)}</td>
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
			<td>{maybeBlank(listing.Bill_of_Sale_In_Amt__Y_Or_N)}</td>
		<tr>
			<td>Expiration Date</td>
			<td>{maybeBlank(listing.ExpirationDate)}</td>
		<tr>
			<td>Ownership</td>
			<td>{listing.Ownership}</td>
		<tr>
			<td>Listing Restrictions</td>
			<td>{maybeBlank(listing.O_LISTING_RESTRICTIONS)}</td>
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
			<td>Primary Heated Living Area Sq Ft</td>
			<td>{maybeBlank(listing.Primary_HtdLvArSF)}</td>
		<tr>
			<td>Additional Living Area Sq Ft</td>
			<td>{maybeBlank(listing.Additional_HtdLvArSF)}</td>
		<tr>
			<td>Total Living Area Sq Ft</td>
			<td>{maybeBlank(listing.Total_HtdLvArSF)}</td>
		<tr>
			<td>Asking Price Per SqFt</td>
			<td>{formatDollarsAndCents(listing.Asking_Price_Per_SqFt)}</td>
		<tr>
			<td>Heated Living Area Sq Ft</td>
			<td>{listing.HtdLvArSF}</td>
		<tr>
			<td>Unheated Living Area Sq Ft</td>
			<td>{maybeBlank(listing.Unheated_LvArSF)}</td>
		<tr>
			<td>BedroomsTotal </td>
			<td>{listing.BedroomsTotal}</td>
		<tr>
			<td>Bathrooms Full</td>
			<td>{listing.BathroomsFull}</td>
		<tr>
			<td>Bathrooms Partial</td>
			<td>{listing.BathroomsPartial}</td>
		<tr>
			<td>Year Built</td>
			<td>{listing.YearBuilt}</td>
		<tr>
			<td>Garage</td>
			<td>{listing.F_GARAGE}</td>
		<tr>
			<td>Garage Sq Ft</td>
			<td>{maybeBlank(listing.Garage_Sq_Ft)}</td>
		<tr>
			<td>Architectural Style</td>
			<td>{prettyJsonList(listing.ArchitecturalStyle)}</td>
		<tr>
			<td>Type</td>
			<td>{maybeBlank(listing.Type)}</td>
		<tr>
			<td>Sub Type</td>
			<td>{listing.PropertySubType}</td>
		<tr>
			<td>Appliances</td>
			<td>{prettyJsonList(listing.Appliances)}</td>
		<tr>
			<td>Roof</td>
			<td>{prettyJsonList(listing.Roof)}</td>
		<tr>
			<td>Parking</td>
			<td>{prettyJsonList(listing.ParkingFeatures)}</td>
		<tr>
			<td>Foundation</td>
			<td>{prettyJsonList(listing.FoundationDetails)}</td>
		<tr>
			<td>Pool</td>
			<td>{listing.Pool}</td>
		<tr>
			<td>Pool Type</td>
			<td>{listing.Pool_Type}</td>
		<tr>
			<td>Pool Features</td>
			<td>{prettyJsonList(listing.PoolFeatures)}</td>
		<tr>
			<td>Screen Porch Size</td>
			<td>{maybeBlank(listing.Screen_Porch_Size)}</td>
		<tr>
			<td>Sun Deck Size</td>
			<td>{maybeBlank(listing.Sun_Deck_Size)}</td>
		<tr>
			<td>Builder Name</td>
			<td>{maybeBlank(listing.BuilderName)}</td>
		<tr>
			<td>Driveway</td>
			<td>{maybeBlank(listing.H_DRIVEWAY)}</td>
		<tr>
			<td>Insulation</td>
			<td>{maybeBlank(listing.T_INSULATION)}</td>
		<tr>
			<td>Counter Tops</td>
			<td>{maybeBlank(listing.ZF_COUNTER_TOPS)}</td>
		<tr>
			<td>Cooling</td>
			<td>{prettyJsonList(listing.Cooling)}</td>
		<tr>
			<td>Interior Features</td>
			<td>{prettyJsonList(listing.InteriorFeatures)}</td>
		<tr>
			<td>Heating</td>
			<td>{prettyJsonList(listing.Heating)}</td>
		<tr>
			<td>Room Type</td>
			<td>{prettyJsonList(listing.RoomType)}</td>
		<tr>
			<td>Flooring</td>
			<td>{prettyJsonList(listing.Flooring)}</td>
		<tr>
			<td>Construction Materials</td>
			<td>{prettyJsonList(listing.ConstructionMaterials)}</td>
		<tr>
			<td>Building Features</td>
			<td>{prettyJsonList(listing.BuildingFeatures)}</td>
		</tbody>
	</table>
</div>

<div>
	<h3>Listing Agent Remarks</h3>

	<div>{listing.PublicRemarks}</div>
</div>
