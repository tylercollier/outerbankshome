<script>
	import { formatDollarsAndCents, formatDollarsOnly } from '$lib/money';
	import { formatDate, formatDateFromString } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';
	import ListingDetailsBottom from '$lib/components/ListingDetailsBottom.svelte';
	import { maybeBlank } from '$lib/listing';
	import ListingDetailsSection from '$lib/components/ListingDetailsSection.svelte';
	import LdpFact from '$lib/components/LdpFact.svelte';

	export let listing;
</script>

<ListingDetailsSection {listing} />

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Listing Information</h3>

	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Area" value={maybeBlank(listing.MLSAreaMinor)} />
		<LdpFact label="Mls Status" value={maybeBlank(listing.StandardStatus)} />
		<LdpFact label="Days On Market" value={maybeBlank(listing.DaysOnMarket)} />
		<LdpFact label="Cumulative Days On Market" value={maybeBlank(listing.CumulativeDaysOnMarket)} />
		<LdpFact label="Listing Price" value={formatDollarsOnly(listing.ListPrice)} />
		<LdpFact label="Original Listing Price" value={formatDollarsOnly(listing.OriginalListPrice)} />
		<LdpFact label="Possession" value={prettyJsonList(listing.Possession)} />
		<LdpFact label="Short Sale" value={maybeBlank(listing.PShortSale)} />
		<LdpFact label="Price Date" value={formatDateFromString(listing.Price_Date)} />
		<LdpFact label="Expiration Date" value={maybeBlank(listing.ExpirationDate)} />
		<LdpFact label="Contract Status Change Date" value={formatDate(listing.ContractStatusChangeDate)} />
		<LdpFact label="Ownership" value={maybeBlank(listing.Ownership)} />
		<LdpFact label="Listing Restrictions" value={maybeBlank(listing.O_LISTING_RESTRICTIONS)} />
		<LdpFact label="Listing Type" value={maybeBlank(listing.ListingAgreement)} />
		<LdpFact label="Listing Type" value={maybeBlank(listing.ListingAgreement)} />
		<LdpFact label="Bank/Institution Owned" value={maybeBlank(listing.Bank_Or__Institution_Owned)} />
		<LdpFact label="Seller to Sever Oil/Gas" value={maybeBlank(listing.Seller_to_sever_Oil_Or_Gas)} />
		<LdpFact label="Oil/Gas Severed Pre Owner" value={maybeBlank(listing.Oil_Or_Gas_Severed_Pre_Owner)} />
		<LdpFact label="Oil/Gas Severed By Seller" value={maybeBlank(listing.Oil_Or_Gas_Severed_by_Seller)} />
		<LdpFact label="Listing Restrictions" value={maybeBlank(listing.ZE_LISTING_RESTRICTIONS)} />
		<LdpFact label="Extras" value={maybeBlank(listing.V_EXTRAS)} />
		<LdpFact label="Price Change" value={formatDate(listing.PriceChangeTimestamp)} />
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Legal Description</h3>
	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Lot Number" value={maybeBlank(listing.Lot_Number)} />
		<LdpFact label="Section" value={maybeBlank(listing.Section)} />
		<LdpFact label="Block" value={maybeBlank(listing.TaxTaxBlock)} />
		<LdpFact label="Phase" value={maybeBlank(listing.Phase)} />
		<LdpFact label="x TaxTract" value={maybeBlank(listing.TaxTaxTract)} />
		<LdpFact label="County" value={maybeBlank(listing.CountyOrParish)} />
		<LdpFact label="Other Counties" value={maybeBlank(listing.Other_Counties)} />
		<LdpFact label="Block" value={maybeBlank(listing.TaxBlock)} />
		<LdpFact label="Subdivision" value={maybeBlank(listing.SubdivisionName)} />
		<LdpFact label="Subdivision Name" value={maybeBlank(listing.Full_Subdivision_Name)} />
		<LdpFact label="Deed Book" value={maybeBlank(listing.Deed_Book)} />
		<LdpFact label="Deed Book Page Number" value={maybeBlank(listing.Deed_Book_PgNumber)} />
		<LdpFact label="County Pin Number" value={maybeBlank(listing.Pin_Number)} />
		<LdpFact label="Tract" value={maybeBlank(listing.TaxTract)} />
		<LdpFact label="Road Surface" value={prettyJsonList(listing.RoadSurfaceType)} />
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Lot Details</h3>
	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Land Tax Value" value={maybeBlank(listing.Land_Value)} />
		<LdpFact label="Total Assessed Value" value={maybeBlank(listing.Total_Assessed_Value)} />
		<LdpFact label="Timber" value={maybeBlank(listing.C_TIMBER)} />
		<LdpFact label="Lot Size Acres" value={maybeBlank(listing.LotSizeAcres)} />
		<LdpFact label="Lot Size Dimensions" value={maybeBlank(listing.LotSizeDimensions)} />
		<LdpFact label="Lot Size Square Feet" value={maybeBlank(listing.LotSizeSquareFeet)} />
		<LdpFact label="Lot Features" value={prettyJsonList(listing.LotFeatures)} />
		<LdpFact label="Lot Faces" value={maybeBlank(listing.Lot_Faces_NEWS)} />
		<LdpFact label="Water Frontage" value={maybeBlank(listing.Water_Frontage)} />
		<LdpFact label="Waterfront" value={prettyJsonList(listing.WaterfrontFeatures)} />
		<LdpFact label="View" value={prettyJsonList(listing.View)} />
		<LdpFact label="Flood Zone" value={maybeBlank(listing.P_FLOOD_ZONE)} />
		<LdpFact label="Property Type" value={maybeBlank(listing.PropertyType)} />
		<LdpFact label="Association Fee Yes or No" value={maybeBlank(listing.Assoc_____Fee_Y_Or_N_Or_Voluntary)} />
		<LdpFact label="Estimated Annual Fee Amt" value={maybeBlank(listing.Estimated_Annual_Fee_Amt)} />
		<LdpFact label="Association Fee Includes" value={prettyJsonList(listing.AssociationFeeIncludes)} />
		<LdpFact label="HOA Contact Info" value={maybeBlank(listing.HOA_Contact_Info)} />
		<LdpFact label="HOA Contact Name" value={maybeBlank(listing.HOA_Contact_Info_Recom)} />
		<LdpFact label="HOA Contact Name" value={maybeBlank(listing.HOA_Contact)} />
		<LdpFact label="HOA Contact Name" value={maybeBlank(listing.HOA_Contact_Name)} />
		<LdpFact label="Association Amenities" value={prettyJsonList(listing.AssociationAmenities)} />
		<LdpFact label="Street Frontage " value={maybeBlank(listing.Street_Frontage)} />
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Property Expenses & Utilities</h3>
	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Tax Year" value={maybeBlank(listing.TaxYear)} />
		<LdpFact label="Annual Property Taxes" value={formatDollarsAndCents(listing.TaxAnnualAmount)} />
		<LdpFact label="Tax Expense" value={maybeBlank(listing.Tax_Expenses)} />
		<LdpFact label="Water Source" value={prettyJsonList(listing.WaterSource)} />
		<LdpFact label="Yearly Water Expense" value={maybeBlank(listing.Yr_Water_Expense)} />
	</div>	
</div>

<ListingDetailsBottom {listing} />
