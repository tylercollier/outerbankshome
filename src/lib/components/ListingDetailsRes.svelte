<script>
	import ListingDetailsBottom from '$lib/components/ListingDetailsBottom.svelte';
	import { formatDollarsOnly, formatDollarsAndCents } from '$lib/money';
	import { formatDate, formatDateFromString } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';
	import './ListingDetailsPage.scss';
	import { maybeBlank } from '$lib/listing';
	import ListingDetailsSection from '$lib/components/ListingDetailsSection.svelte';
	import { isClosed } from '$lib/listing';
	import LdpFact from '$lib/components/LdpFact.svelte';

	export let listing;
</script>

<ListingDetailsSection {listing} />

{#if isClosed(listing)}
<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Sold Details</h3>
	<div class="columns-1 md:columns-2 items-start">
		<LdpFact label="Status" value={maybeBlank(listing.StandardStatus)} />
		<LdpFact label="Sold Price" value={formatDollarsAndCents(listing.ClosePrice)} />
		<LdpFact label="Closing Date" value={formatDate(listing.CloseDate)} />
		<LdpFact label="Off Market Date" value={formatDateFromString(listing.Off_Market_Status_Date)} />
		<LdpFact label="Contract Date" value={formatDateFromString(listing.Contract_Date)} />
		<LdpFact label="Seller Concessions" value={maybeBlank(listing.Concessions)} />
		<LdpFact label="Concession Comments" value={maybeBlank(listing.ConcessionsComments)} />
		<div class="pb-2"><span class="font-bold">Total Days on Market:</span></div>
		<LdpFact label="Cumulative Days on Market" value={maybeBlank(listing.CumulativeDaysOnMarket)} />
		<LdpFact label="Multiple Signed Offers" value={maybeBlank(listing.Multiple_Signed_Offers)} />
		<LdpFact label="Due Diligence Date" value={formatDateFromString(listing.Due_Diligence_Date)} />
	</div>
</div>
{/if}

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Listing Information</h3>

	<div class="columns-1 md:columns-2 items-start">
		<LdpFact label="Area" value={maybeBlank(listing.MLSAreaMinor)} />
		<LdpFact label="Mls Status" value={maybeBlank(listing.StandardStatus)} />
		<LdpFact label="Days On Market" value={maybeBlank(listing.DaysOnMarket)} />
		<LdpFact label="Cumulative Days On Market" value={maybeBlank(listing.CumulativeDaysOnMarket)} />
		<LdpFact label="Listing Price" value={formatDollarsOnly(listing.ListPrice)} />
		<LdpFact label="Original Listing Price" value={formatDollarsOnly(listing.OriginalListPrice)} />
		<LdpFact label="Possession" value={prettyJsonList(listing.Possession)} />
		<LdpFact label="Short Sale" value={maybeBlank(listing.PShortSale)} />
		<LdpFact label="Price Date" value={formatDateFromString(listing.Price_Date)} />
		<LdpFact label="Furnishing Available" value={maybeBlank(listing.Furnishings_Available_Y_Or_N)} />
		<LdpFact label="Bill Of Sale Amount" value={maybeBlank(listing.Bill_of_Sale_In_Amt__Y_Or_N)} />
		<LdpFact label="Expiration Date" value={maybeBlank(listing.ExpirationDate)} />
		<LdpFact label="Ownership" value={maybeBlank(listing.Ownership)} />
		<LdpFact label="Listing Restrictions" value={maybeBlank(listing.O_LISTING_RESTRICTIONS)} />
		<LdpFact label="Listing Type" value={maybeBlank(listing.ListingAgreement)} />
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Building Details</h3>

	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Primary Heated Living Area Sq Ft" value={maybeBlank(listing.Primary_HtdLvArSF)} />
		<LdpFact label="Additional Living Area Sq Ft" value={maybeBlank(listing.Additional_HtdLvArSF)} />
		<LdpFact label="Total Living Area Sq Ft" value={maybeBlank(listing.Total_HtdLvArSF)} />
		<LdpFact label="Asking Price Per SqFt" value={formatDollarsAndCents(listing.Asking_Price_Per_SqFt)} />
		<LdpFact label="Heated Living Area Sq Ft" value={maybeBlank(listing.HtdLvArSF)} />
		<LdpFact label="Unheated Living Area Sq Ft" value={maybeBlank(listing.Unheated_LvArSF)} />
		<LdpFact label="BedroomsTotal" value={maybeBlank(listing.BedroomsTotal)} />
		<LdpFact label="Bathrooms Full" value={maybeBlank(listing.BathroomsFull)} />
		<LdpFact label="Bathrooms Partial" value={maybeBlank(listing.BathroomsPartial)} />
		<LdpFact label="Year Built" value={maybeBlank(listing.YearBuilt)} />
		<LdpFact label="Garage" value={maybeBlank(listing.F_GARAGE)} />
		<LdpFact label="Garage Sq Ft" value={maybeBlank(listing.Garage_Sq_Ft)} />
		<LdpFact label="Architectural Style" value={prettyJsonList(listing.ArchitecturalStyle)} />
		<LdpFact label="Type" value={maybeBlank(listing.Type)} />
		<LdpFact label="Sub Type" value={maybeBlank(listing.PropertySubType)} />
		<LdpFact label="Appliances" value={prettyJsonList(listing.Appliances)} />
		<LdpFact label="Roof" value={prettyJsonList(listing.Roof)} />
		<LdpFact label="Parking" value={prettyJsonList(listing.ParkingFeatures)} />
		<LdpFact label="Foundation" value={prettyJsonList(listing.FoundationDetails)} />
		<LdpFact label="Pool" value={maybeBlank(listing.Pool)} />
		<LdpFact label="Pool Type" value={maybeBlank(listing.Pool_Type)} />
		<LdpFact label="Pool Features" value={prettyJsonList(listing.PoolFeatures)} />
		<LdpFact label="Screen Porch Size" value={maybeBlank(listing.Screen_Porch_Size)} />
		<LdpFact label="Sun Deck Size" value={maybeBlank(listing.Sun_Deck_Size)} />
		<LdpFact label="Builder Name" value={maybeBlank(listing.BuilderName)} />
		<LdpFact label="Driveway" value={maybeBlank(listing.H_DRIVEWAY)} />
		<LdpFact label="Insulation" value={maybeBlank(listing.T_INSULATION)} />
		<LdpFact label="Counter Tops" value={maybeBlank(listing.ZF_COUNTER_TOPS)} />
		<LdpFact label="Cooling" value={prettyJsonList(listing.Cooling)} />
		<LdpFact label="Interior Features" value={prettyJsonList(listing.InteriorFeatures)} />
		<LdpFact label="Heating" value={prettyJsonList(listing.Heating)} />
		<LdpFact label="Room Type" value={prettyJsonList(listing.RoomType)} />
		<LdpFact label="Flooring" value={prettyJsonList(listing.Flooring)} />
		<LdpFact label="Construction Materials" value={prettyJsonList(listing.ConstructionMaterials)} />
		<LdpFact label="Building Features" value={prettyJsonList(listing.BuildingFeatures)} />
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
		<LdpFact label="Subdivision" value={maybeBlank(listing.SubdivisionName)} />
		<LdpFact label="Subdivision Name" value={maybeBlank(listing.Full_Subdivision_Name)} />
		<LdpFact label="Deed Book" value={maybeBlank(listing.Deed_Book)} />
		<LdpFact label="Deed Book Page Number" value={maybeBlank(listing.Deed_Book_PgNumber)} />
		<LdpFact label="County Pin Number" value={maybeBlank(listing.Pin_Number)} />
		<LdpFact label="HOA Contact Name" value={maybeBlank(listing.HOA_Contact_Name)} />
		<LdpFact label="Price Change" value={formatDate(listing.PriceChangeTimestamp)} />
		<LdpFact label="Block" value={maybeBlank(listing.TaxBlock)} />
		<LdpFact label="Tract" value={maybeBlank(listing.TaxTract)} />
		<LdpFact label="Road Surface" value={prettyJsonList(listing.RoadSurfaceType)} />
		<LdpFact label="Association Amenities" value={prettyJsonList(listing.AssociationAmenities)} />
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
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Property Expenses & Utilities</h3>
	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Tax Year" value={maybeBlank(listing.TaxYear)} />
		<LdpFact label="Annual Property Taxes" value={formatDollarsAndCents(listing.TaxAnnualAmount)} />
		<LdpFact label="Insurance Expenses" value={maybeBlank(listing.Insurance_Expenses)} />
		<LdpFact label="Home Oner Insurance Expense" value={maybeBlank(listing.Homeowner_Insurance)} />
		<LdpFact label="Flood Zone" value={maybeBlank(listing.ZH_FLOOD_ZONE)} />
		<LdpFact label="Flood Insurance Expense" value={maybeBlank(listing.Flood_Insurance)} />
		<LdpFact label="Wind Insurance" value={maybeBlank(listing.Wind_Insurance)} />
		<LdpFact label="Other Insurance" value={maybeBlank(listing.Other_Insurance)} />
		<LdpFact label="Other Expenses 3" value={maybeBlank(listing.Other_Expenses_3)} />
		<LdpFact label="Water Source" value={prettyJsonList(listing.WaterSource)} />
		<LdpFact label="Yearly Water Expense" value={maybeBlank(listing.Yr_Water_Expense)} />
		<LdpFact label="Other Yearly Expense" value={maybeBlank(listing.Other_Expenses)} />
		<LdpFact label="Total Yearly Expense" value={maybeBlank(listing.Total_Expenses)} />
		<LdpFact label="Pool Or Spa Expense" value={maybeBlank(listing.Pool_Or_Spa_Expense)} />
		<LdpFact label="Yearly Expense" value={maybeBlank(listing.Yearly_Expense_Act_Or_Est)} />
		<LdpFact label="Electric Expense" value={prettyJsonList(listing.Electric)} />
		<LdpFact label="Management Fee" value={maybeBlank(listing.Management_Fee)} />
		<LdpFact label="Yearly Elecric Expense" value={maybeBlank(listing.Yr_Electric_Expense)} />
		<LdpFact label="Yearly Telephone Expense" value={maybeBlank(listing.Yr_Telephone_Expense)} />
		<LdpFact label="Yearly Cable Tv Expense" value={maybeBlank(listing.Yr_Cable_TV_Expense)} />
		<LdpFact label="Contract Status Change Date" value={formatDate(listing.ContractStatusChangeDate)} />
		<LdpFact label="Estimated Annual Fee Amt" value={formatDollarsAndCents(listing.Estimated_Annual_Fee_Amt)} />
		<LdpFact label="Sewer" value={prettyJsonList(listing.Sewer)} />
		<LdpFact label="Septic Fee" value={maybeBlank(listing.Septic_Fee)} />
		<LdpFact label="Maintenance Expense" value={maybeBlank(listing.Maintenance_Expenses)} />
		<LdpFact label="Tax Expense" value={maybeBlank(listing.Tax_Expenses)} />
		<LdpFact label="Association Fee Includes" value={prettyJsonList(listing.AssociationFeeIncludes)} />
		<LdpFact label="Association Fee" value={maybeBlank(listing.AssociationFee)} />
		<LdpFact label="Pet Fee" value={maybeBlank(listing.Pet_Fee_Y_Or_N)} />
		<LdpFact label="Pet Fee" value={maybeBlank(listing.Pet_Fee_Amount)} />
		<LdpFact label="Other Expenses 2" value={maybeBlank(listing.Other_Expenses_2)} />
		<LdpFact label="Association Fee Yes or No" value={maybeBlank(listing.Assoc_____Fee_Y_Or_N_Or_Voluntary)} />
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Financials</h3>
	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Bill Of Sale Amoung" value={maybeBlank(listing.Bill_of_Sale_Amount_Amt)} />
		<LdpFact label="Electroni Locks" value={maybeBlank(listing.Electronic_Locks)} />
		<LdpFact label="Construction Loan Status" value={maybeBlank(listing.Const_Loan_Status)} />
		<LdpFact label="Seller to Sever Oil/Gas" value={maybeBlank(listing.Seller_to_sever_Oil_Or_Gas)} />
		<LdpFact label="Bank/Institution Owned" value={maybeBlank(listing.Bank_Or__Institution_Owned)} />
		<LdpFact label="Oil/Gas Severed Pre Owner" value={maybeBlank(listing.Oil_Or_Gas_Severed_Pre_Owner)} />
		<LdpFact label="Oil/Gas Severed By Seller" value={maybeBlank(listing.Oil_Or_Gas_Severed_by_Seller)} />
		<LdpFact label="Listing Restrictions" value={maybeBlank(listing.ZE_LISTING_RESTRICTIONS)} />
		<LdpFact label="Exterior" value={maybeBlank(listing.E_EXTERIOR)} />
		<LdpFact label="HashTag of Units" value={maybeBlank(listing.HashTag__of_Units)} />
		<LdpFact label="Extras" value={maybeBlank(listing.V_EXTRAS)} />
		<LdpFact label="Covered Deck Size" value={maybeBlank(listing.Covered_Deck_Size)} />
		<LdpFact label="Fuel Tanks" value={maybeBlank(listing.Fuel_Tanks)} />
		<LdpFact label="HOA Contact Name" value={maybeBlank(listing.HOA_Contact)} />
		<LdpFact label="Limited Service" value={maybeBlank(listing.Limited_Service)} />
		<LdpFact label="Primary Residence" value={maybeBlank(listing.Primary_Residence_Y_Or_N)} />
		<LdpFact label="Street Frontage " value={maybeBlank(listing.Street_Frontage)} />
		<LdpFact label="HOA Contact Info" value={maybeBlank(listing.HOA_Contact_Info)} />
		<LdpFact label="HOA Contact Name" value={maybeBlank(listing.HOA_Contact_Info_Recom)} />
		<LdpFact label="Basement" value={prettyJsonList(listing.Basement)} />
	</div>
</div>

<div class="mb-12">
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Rental Income</h3>

	{#if listing.Est_Annual_Rental_Income_Amt}
	<div class="columns-1 md:columns-2 align-top">
		<LdpFact label="Annual Rental Income" value={maybeBlank(listing.Est_Annual_Rental_Income_Amt)} />
		<LdpFact label="Rental Performance" value={maybeBlank(listing.Est_Rental_Performance)} />
		<LdpFact label="Rental Cottage Name" value={maybeBlank(listing.Rental_Cottage_Number)} />
		<LdpFact label="Rental Performnce Last Yesr" value={maybeBlank(listing.Rental_Performnce_Last_Yr)} />
		<LdpFact label="Gross Income YTD Amt" value={maybeBlank(listing.Gross_Income_YTD_Amt)} />
		<LdpFact label="How Rented" value={maybeBlank(listing.How_Rented)} />
		<LdpFact label="Owner Rental Income 2024 Amount" value={maybeBlank(listing.Owner_Rental_Income_2024Amt)} />
		<LdpFact label="Avertised Income 2024 Amount" value={maybeBlank(listing.Advertised_Income_2024Amt)} />
		<LdpFact label="Owner Renatl Income 2023 Amount" value={maybeBlank(listing.Owner_Rental_Income_2023Amt)} />
		<LdpFact label="Avertised Income 2023 Amount" value={maybeBlank(listing.Advertised_Income_2023Amt)} />
		<LdpFact label="Owner Renatl Income 2022 Amount" value={maybeBlank(listing.Owner_Rental_Income_2022Amt)} />
		<LdpFact label="Avertised Income 2021 Amount" value={maybeBlank(listing.Advertised_Income_2022Amt)} />
		<LdpFact label="Owner Rental Income 2021 Amount" value={maybeBlank(listing.Owner_Rental_Income_2021Amt)} />
		<LdpFact label="Avertised Income 2021 Amount" value={maybeBlank(listing.Advertised_Income_2021Amt)} />
		<LdpFact label="Income History Year 1" value={maybeBlank(listing.Income_Hist_Year_1)} />
		<LdpFact label="Income History Year 1 Amount" value={maybeBlank(listing.Income_Hist_Year_1_Amt)} />
		<LdpFact label="Income History Year 2 " value={maybeBlank(listing.Income_Hist_Year_2)} />
		<LdpFact label="Income History Year 2 Amount" value={maybeBlank(listing.Income_Hist_Year_2_Amt)} />
		<LdpFact label="Income History Year 3" value={maybeBlank(listing.Income_Hist_Year_3)} />
		<LdpFact label="Income History Year 3 Amount" value={maybeBlank(listing.Income_Hist_Year_3_Amt)} />
		<LdpFact label="Rental Cottage_Name" value={maybeBlank(listing.Rental_Cottage_Name)} />
		<LdpFact label="Rental Turnover Day" value={maybeBlank(listing.Rental_Turnover_Day)} />
		<LdpFact label="Rental Company" value={maybeBlank(listing.Rental_Co)} />
		<LdpFact label="Rental Term" value={maybeBlank(listing.RTerm)} />
	</div>
	{:else}
		There is no rental income information available
	{/if}
</div>

<ListingDetailsBottom {listing} />
