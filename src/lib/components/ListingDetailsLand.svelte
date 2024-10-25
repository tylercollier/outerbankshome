<script>
	import { formatDollarsAndCents, formatDollarsOnly } from '$lib/money';
	import { formatDate, formatDateFromString } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';
	import ListingDetailsBottom from '$lib/components/ListingDetailsBottom.svelte';
	import { maybeBlank } from '$lib/listing';
	import ListingDetailsSection from '$lib/components/ListingDetailsSection.svelte';

	export let listing;
</script>

<ListingDetailsSection {listing} />

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Listing Information</h3>

	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Area:</span> {maybeBlank(listing.MLSAreaMinor)}</div>
		<div class="pb-2"><span class="font-bold">Mls Status:</span> {maybeBlank(listing.StandardStatus)}</div>
		<div class="pb-2"><span class="font-bold">Days On Market:</span> {maybeBlank(listing.DaysOnMarket)}</div>
		<div class="pb-2"><span class="font-bold">Cumulative Days On Market:</span> {maybeBlank(listing.CumulativeDaysOnMarket)}</div>
		<div class="pb-2"><span class="font-bold">Listing Price:</span> {formatDollarsOnly(listing.ListPrice)}</div>
		<div class="pb-2"><span class="font-bold">Original Listing Price:</span> {formatDollarsOnly(listing.OriginalListPrice)}</div>
		<div class="pb-2"><span class="font-bold">Possession:</span> {prettyJsonList(listing.Possession)}</div>
		<div class="pb-2"><span class="font-bold">Short Sale:</span> {maybeBlank(listing.PShortSale)}</div>
		<div class="pb-2"><span class="font-bold">Price Date:</span> {formatDateFromString(listing.Price_Date)}</div>
		<div class="pb-2"><span class="font-bold">Expiration Date:</span> {maybeBlank(listing.ExpirationDate)}</div>
		<div class="pb-2"><span class="font-bold">Contract Status Change Date:</span> {formatDate(listing.ContractStatusChangeDate)}</div>
		<div class="pb-2"><span class="font-bold">Ownership:</span> {maybeBlank(listing.Ownership)}</div>
		<div class="pb-2"><span class="font-bold">Listing Restrictions:</span> {maybeBlank(listing.O_LISTING_RESTRICTIONS)}</div>
		<div class="pb-2"><span class="font-bold">Listing Type:</span> {maybeBlank(listing.ListingAgreement)}</div>
		<div class="pb-2"><span class="font-bold">Listing Type:</span> {maybeBlank(listing.ListingAgreement)}</div>
		<div class="pb-2"><span class="font-bold">Bank/Institution Owned:</span> {maybeBlank(listing.Bank_Or__Institution_Owned)}</div>
		<div class="pb-2"><span class="font-bold">Seller to Sever Oil/Gas:</span> {maybeBlank(listing.Seller_to_sever_Oil_Or_Gas)}</div>
		<div class="pb-2"><span class="font-bold">Oil/Gas Severed Pre Owner:</span> {maybeBlank(listing.Oil_Or_Gas_Severed_Pre_Owner)}</div>
		<div class="pb-2"><span class="font-bold">Oil/Gas Severed By Seller:</span> {maybeBlank(listing.Oil_Or_Gas_Severed_by_Seller)}</div>
		<div class="pb-2"><span class="font-bold">Listing Restrictions:</span> {maybeBlank(listing.ZE_LISTING_RESTRICTIONS)}</div>
		<div class="pb-2"><span class="font-bold">Extras:</span> {maybeBlank(listing.V_EXTRAS)}</div>
		<div class="pb-2"><span class="font-bold">Price Change:</span> {formatDate(listing.PriceChangeTimestamp)}</div>
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Legal Description</h3>
	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Lot Number:</span> {maybeBlank(listing.Lot_Number)}</div>
		<div class="pb-2"><span class="font-bold">Section:</span> {maybeBlank(listing.Section)}</div>
		<div class="pb-2"><span class="font-bold">Block:</span> {maybeBlank(listing.TaxTaxBlock)}</div>
		<div class="pb-2"><span class="font-bold">Phase:</span> {maybeBlank(listing.Phase)}</div>
		<div class="pb-2"><span class="font-bold">x TaxTract:</span> {maybeBlank(listing.TaxTaxTract)}</div>
		<div class="pb-2"><span class="font-bold">County:</span> {maybeBlank(listing.CountyOrParish)}</div>
		<div class="pb-2"><span class="font-bold">Other Counties:</span> {maybeBlank(listing.Other_Counties)}</div>
		<div class="pb-2"><span class="font-bold">Block:</span> {maybeBlank(listing.TaxBlock)}</div>
		<div class="pb-2"><span class="font-bold">Subdivision:</span> {maybeBlank(listing.SubdivisionName)}</div>
		<div class="pb-2"><span class="font-bold">Subdivision Name:</span> {maybeBlank(listing.Full_Subdivision_Name)}</div>
		<div class="pb-2"><span class="font-bold">Deed Book:</span> {maybeBlank(listing.Deed_Book)}</div>
		<div class="pb-2"><span class="font-bold">Deed Book Page Number:</span> {maybeBlank(listing.Deed_Book_PgNumber)}</div>
		<div class="pb-2"><span class="font-bold">County Pin Number:</span> {maybeBlank(listing.Pin_Number)}</div>
		<div class="pb-2"><span class="font-bold">Tract:</span> {maybeBlank(listing.TaxTract)}</div>
		<div class="pb-2"><span class="font-bold">Road Surface:</span> {prettyJsonList(listing.RoadSurfaceType)}</div>
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Lot Details</h3>
	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Land Tax Value:</span> {maybeBlank(listing.Land_Value)}</div>
		<div class="pb-2"><span class="font-bold">Total Assessed Value:</span> {maybeBlank(listing.Total_Assessed_Value)}</div>
		<div class="pb-2"><span class="font-bold">Timber:</span> {maybeBlank(listing.C_TIMBER)}</div>
		<div class="pb-2"><span class="font-bold">Lot Size Acres:</span> {maybeBlank(listing.LotSizeAcres)}</div>
		<div class="pb-2"><span class="font-bold">Lot Size Dimensions:</span> {maybeBlank(listing.LotSizeDimensions)}</div>
		<div class="pb-2"><span class="font-bold">Lot Size Square Feet:</span> {maybeBlank(listing.LotSizeSquareFeet)}</div>
		<div class="pb-2"><span class="font-bold">Lot Features:</span> {prettyJsonList(listing.LotFeatures)}</div>
		<div class="pb-2"><span class="font-bold">Lot Faces:</span> {maybeBlank(listing.Lot_Faces_NEWS)}</div>
		<div class="pb-2"><span class="font-bold">Water Frontage:</span> {maybeBlank(listing.Water_Frontage)}</div>
		<div class="pb-2"><span class="font-bold">Waterfront:</span> {prettyJsonList(listing.WaterfrontFeatures)}</div>
		<div class="pb-2"><span class="font-bold">View:</span> {prettyJsonList(listing.View)}</div>
		<div class="pb-2"><span class="font-bold">Flood Zone:</span> {maybeBlank(listing.P_FLOOD_ZONE)}</div>
		<div class="pb-2"><span class="font-bold">Property Type:</span> {maybeBlank(listing.PropertyType)}</div>
		<div class="pb-2"><span class="font-bold">Association Fee Yes or No:</span> {maybeBlank(listing.Assoc_____Fee_Y_Or_N_Or_Voluntary)}</div>
		<div class="pb-2"><span class="font-bold">Estimated Annual Fee Amt:</span> {maybeBlank(listing.Estimated_Annual_Fee_Amt)}</div>
		<div class="pb-2"><span class="font-bold">Association Fee Includes:</span> {prettyJsonList(listing.AssociationFeeIncludes)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Info:</span> {maybeBlank(listing.HOA_Contact_Info)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Name:</span> {maybeBlank(listing.HOA_Contact_Info_Recom)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Name:</span> {maybeBlank(listing.HOA_Contact)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Name:</span> {maybeBlank(listing.HOA_Contact_Name)}</div>
		<div class="pb-2"><span class="font-bold">Association Amenities:</span> {prettyJsonList(listing.AssociationAmenities)}</div>
		<div class="pb-2"><span class="font-bold">Street Frontage :</span> {maybeBlank(listing.Street_Frontage)}</div>
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Property Expenses & Utilities</h3>
	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Tax Year:</span> {maybeBlank(listing.TaxYear)}</div>
		<div class="pb-2"><span class="font-bold">Annual Property Taxes:</span> {formatDollarsAndCents(listing.TaxAnnualAmount)}</div>
		<div class="pb-2"><span class="font-bold">Tax Expense:</span> {maybeBlank(listing.Tax_Expenses)}</div>
		<div class="pb-2"><span class="font-bold">Water Source:</span> {prettyJsonList(listing.WaterSource)}</div>
		<div class="pb-2"><span class="font-bold">Yearly Water Expense:</span> {maybeBlank(listing.Yr_Water_Expense)}</div>
	</div>	
</div>

<ListingDetailsBottom {listing} />
