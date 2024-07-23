<script>
	import { formatDollarsAndCents, formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';
	import ListingDetailsBottom from '$lib/components/ListingDetailsBottom.svelte';
	import { maybeBlank } from '$lib/listing';
	import ListingDetailsSection from '$lib/components/ListingDetailsSection.svelte';

	export let listing;
</script>

<ListingDetailsSection {listing} />

<div>
	<h3>Listing Information</h3>

	<table class="listing-details-section">
		<tbody>
			<tr>
				<td>Area</td>
				<td>{maybeBlank(listing.MLSAreaMinor)}</td>
			</tr>
			<tr>
				<td>Mls Status</td>
				<td>{maybeBlank(listing.StandardStatus)}</td>
			</tr>
			<tr>
				<td>Days On Market</td>
				<td>{maybeBlank(listing.DaysOnMarket)}</td>
			</tr>
			<tr>
				<td>Cumulative Days On Market</td>
				<td>{maybeBlank(listing.CumulativeDaysOnMarket)}</td>
			</tr>
			<tr>
				<td>Listing Price</td>
				<td>{formatDollarsOnly(listing.ListPrice)}</td>
			</tr>
			<tr>
				<td>Original Listing Price</td>
				<td>{formatDollarsOnly(listing.OriginalListPrice)}</td>
			</tr>
			<tr>
				<td>Possession</td>
				<td>{prettyJsonList(listing.Possession)}</td>
			</tr>
			<tr>
				<td>Short Sale</td>
				<td>{maybeBlank(listing.PShortSale)}</td>
			</tr>
			<tr>
				<td>Price Date</td>
				<td>{maybeBlank(listing.Price_Date)}</td>
			</tr>
			<tr>
				<td>Expiration Date</td>
				<td>{maybeBlank(listing.ExpirationDate)}</td>
			</tr>
			<tr>
				<td>Contract Status Change Date</td>
				<td>{formatDate(listing.ContractStatusChangeDate)}</td>
			</tr>
			<tr>
				<td>Ownership</td>
				<td>{maybeBlank(listing.Ownership)}</td>
			</tr>
			<tr>
				<td>Listing Restrictions</td>
				<td>{maybeBlank(listing.O_LISTING_RESTRICTIONS)}</td>
			</tr>
			<tr>
				<td>Listing Type</td>
				<td>{maybeBlank(listing.ListingAgreement)}</td>
			</tr>
			<tr>
				<td>Listing Type</td>
				<td>{maybeBlank(listing.ListingAgreement)}</td>
			</tr>
			<tr>
				<td>Bank/Institution Owned</td>
				<td>{maybeBlank(listing.Bank_Or__Institution_Owned)}</td>
			</tr>
			<tr>
				<td>Seller to Sever Oil/Gas</td>
				<td>{maybeBlank(listing.Seller_to_sever_Oil_Or_Gas)}</td>
			</tr>
			<tr>
				<td>Oil/Gas Severed Pre Owner</td>
				<td>{maybeBlank(listing.Oil_Or_Gas_Severed_Pre_Owner)}</td>
			</tr>
			<tr>
				<td>Oil/Gas Severed By Seller</td>
				<td>{maybeBlank(listing.Oil_Or_Gas_Severed_by_Seller)}</td>
			</tr>
			<tr>
				<td>Listing Restrictions</td>
				<td>{maybeBlank(listing.ZE_LISTING_RESTRICTIONS)}</td>
			</tr>
			<tr>
				<td>Extras</td>
				<td>{maybeBlank(listing.V_EXTRAS)}</td>
			</tr>
			<tr>
				<td>Price Change</td>
				<td>{formatDate(listing.PriceChangeTimestamp)}</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Legal Description</h3>

	<table class="listing-details-section">
		<tbody>
			<tr>
				<td>Lot Number</td>
				<td>{maybeBlank(listing.Lot_Number)}</td>
			</tr>
			<tr>
				<td>Section</td>
				<td>{maybeBlank(listing.Section)}</td>
			</tr>
			<tr>
				<td>Block</td>
				<td>{maybeBlank(listing.TaxTaxBlock)}</td>
			</tr>
			<tr>
				<td>Phase</td>
				<td>{maybeBlank(listing.Phase)}</td>
			</tr>
			<tr>
				<td>x TaxTract</td>
				<td>{maybeBlank(listing.TaxTaxTract)}</td>
			</tr>
			<tr>
				<td>County</td>
				<td>{maybeBlank(listing.CountyOrParish)}</td>
			</tr>
			<tr>
				<td>Other Counties</td>
				<td>{maybeBlank(listing.Other_Counties)}</td>
			</tr>
			<tr>
				<td>Block</td>
				<td>{maybeBlank(listing.TaxBlock)}</td>
			</tr>
			<tr>
				<td>Subdivision</td>
				<td>{maybeBlank(listing.SubdivisionName)}</td>
			</tr>
			<tr>
				<td>Subdivision Name</td>
				<td>{maybeBlank(listing.Full_Subdivision_Name)}</td>
			</tr>
			<tr>
				<td>Deed Book</td>
				<td>{maybeBlank(listing.Deed_Book)}</td>
			</tr>
			<tr>
				<td>Deed Book Page Number</td>
				<td>{maybeBlank(listing.Deed_Book_PgNumber)}</td>
			</tr>
			<tr>
				<td>County Pin Number</td>
				<td>{maybeBlank(listing.Pin_Number)}</td>
			</tr>
			<tr>
				<td>Tract</td>
				<td>{maybeBlank(listing.TaxTract)}</td>
			</tr>
			<tr>
				<td>Road Surface</td>
				<td>{prettyJsonList(listing.RoadSurfaceType)}</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Lot Details</h3>

	<table class="listing-details-section">
		<tbody>
			<tr>
				<td>Land Tax Value</td>
				<td>{maybeBlank(listing.Land_Value)}</td>
			</tr>
			<tr>
				<td>Total Assessed Value</td>
				<td>{maybeBlank(listing.Total_Assessed_Value)}</td>
			</tr>
			<tr>
				<td>Timber</td>
				<td>{maybeBlank(listing.C_TIMBER)}</td>
			</tr>
			<tr>
				<td>Lot Size Acres</td>
				<td>{maybeBlank(listing.LotSizeAcres)}</td>
			</tr>
			<tr>
				<td>Lot Size Dimensions</td>
				<td>{maybeBlank(listing.LotSizeDimensions)}</td>
			</tr>
			<tr>
				<td>Lot Size Square Feet</td>
				<td>{maybeBlank(listing.LotSizeSquareFeet)}</td>
			</tr>
			<tr>
				<td>Lot Features</td>
				<td>{prettyJsonList(listing.LotFeatures)}</td>
			</tr>
			<tr>
				<td>Lot Faces</td>
				<td>{maybeBlank(listing.Lot_Faces_NEWS)}</td>
			</tr>
			<tr>
				<td>Water Frontage</td>
				<td>{maybeBlank(listing.Water_Frontage)}</td>
			</tr>
			<tr>
				<td>Waterfront</td>
				<td>{prettyJsonList(listing.WaterfrontFeatures)}</td>
			</tr>
			<tr>
				<td>View</td>
				<td>{prettyJsonList(listing.View)}</td>
			</tr>
			<tr>
				<td>Flood Zone</td>
				<td>{maybeBlank(listing.P_FLOOD_ZONE)}</td>
			</tr>
			<tr>
				<td>Property Type</td>
				<td>{maybeBlank(listing.PropertyType)}</td>
			</tr>
			<tr>
				<td>Association Fee Yes or No</td>
				<td>{maybeBlank(listing.Assoc_____Fee_Y_Or_N_Or_Voluntary)}</td>
			</tr>
			<tr>
				<td>Estimated Annual Fee Amt</td>
				<td>{maybeBlank(listing.Estimated_Annual_Fee_Amt)}</td>
			</tr>
			<tr>
				<td>Association Fee Includes</td>
				<td>{prettyJsonList(listing.AssociationFeeIncludes)}</td>
			</tr>
			<tr>
				<td>HOA Contact Info</td>
				<td>{maybeBlank(listing.HOA_Contact_Info)}</td>
			</tr>
			<tr>
				<td>HOA Contact Name</td>
				<td>{maybeBlank(listing.HOA_Contact_Info_Recom)}</td>
			</tr>
			<tr>
				<td>HOA Contact Name</td>
				<td>{maybeBlank(listing.HOA_Contact)}</td>
			</tr>
			<tr>
				<td>HOA Contact Name</td>
				<td>{maybeBlank(listing.HOA_Contact_Name)}</td>
			</tr>
			<tr>
				<td>Association Amenities</td>
				<td>{prettyJsonList(listing.AssociationAmenities)}</td>
			</tr>
			<tr>
				<td>Street Frontage </td>
				<td>{maybeBlank(listing.Street_Frontage)}</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Property Expenses & Utilities</h3>

	<table class="listing-details-section">
		<tbody>
			<tr>
				<td>Tax Year</td>
				<td>{maybeBlank(listing.TaxYear)}</td>
			</tr>
			<tr>
				<td>Annual Property Taxes</td>
				<td>{formatDollarsAndCents(listing.TaxAnnualAmount)}</td>
			</tr>
			<tr>
				<td>Tax Expense</td>
				<td>{maybeBlank(listing.Tax_Expenses)}</td>
			</tr>
			<tr>
				<td>Water Source</td>
				<td>{prettyJsonList(listing.WaterSource)}</td>
			</tr>
			<tr>
				<td>Yearly Water Expense</td>
				<td>{maybeBlank(listing.Yr_Water_Expense)}</td>
			</tr>
		</tbody>
	</table>
</div>

<ListingDetailsBottom {listing} />
