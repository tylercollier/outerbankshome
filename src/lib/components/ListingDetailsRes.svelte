<script>
	import ListingDetailsBottom from '$lib/components/ListingDetailsBottom.svelte';
	import { formatDollarsOnly, formatDollarsAndCents } from '$lib/money';
	import { formatDate, formatDateFromString } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';
	import './ListingDetailsPage.scss';
	import { maybeBlank } from '$lib/listing';
	import ListingDetailsSection from '$lib/components/ListingDetailsSection.svelte';
	import { isClosed } from '$lib/listing';

	export let listing;
</script>

<ListingDetailsSection {listing} />

{#if isClosed(listing)}
<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Sold Details</h3>
	<div class="columns-1 md:columns-2 items-start">
		<div class="pb-2"><span class="font-bold">Status:</span> {maybeBlank(listing.StandardStatus)}</div>
		<div class="pb-2"><span class="font-bold">Sold Price:</span> {formatDollarsAndCents(listing.ClosePrice)}</div>
		<div class="pb-2"><span class="font-bold">Closing Date:</span> {formatDate(listing.CloseDate)}</div>
		<div class="pb-2"><span class="font-bold">Off Market Date:</span> {formatDateFromString(listing.Off_Market_Status_Date)}</div>
		<div class="pb-2"><span class="font-bold">Contract Date:</span> {formatDateFromString(listing.Contract_Date)}</div>
		<div class="pb-2"><span class="font-bold">Seller Concessions:</span> {maybeBlank(listing.Concessions)}</div>
		<div class="pb-2"><span class="font-bold">Concession Comments:</span> {maybeBlank(listing.ConcessionsComments)}</div>
		<div class="pb-2"><span class="font-bold">Total Days on Market:</span></div>
		<div class="pb-2"><span class="font-bold">Cumulative Days on Market:</span> {maybeBlank(listing.CumulativeDaysOnMarket)}</div>
		<div class="pb-2"><span class="font-bold">Multiple Signed Offers:</span> {maybeBlank(listing.Multiple_Signed_Offers)}</div>
		<div class="pb-2"><span class="font-bold">Due Diligence Date:</span> {formatDateFromString(listing.Due_Diligence_Date)}</div>
	</div>
</div>
{/if}

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Listing Information</h3>

	<div class="columns-1 md:columns-2 items-start">
		<div class="pb-2"><span class="font-bold">Area:</span> {maybeBlank(listing.MLSAreaMinor)}</div>
		<div class="pb-2"><span class="font-bold">Mls Status:</span> {maybeBlank(listing.StandardStatus)}</div>
		<div class="pb-2"><span class="font-bold">Days On Market:</span> {maybeBlank(listing.DaysOnMarket)}</div>
		<div class="pb-2"><span class="font-bold">Cumulative Days On Market:</span> {maybeBlank(listing.CumulativeDaysOnMarket)}</div>
		<div class="pb-2"><span class="font-bold">Listing Price:</span> {formatDollarsOnly(listing.ListPrice)}</div>
		<div class="pb-2"><span class="font-bold">Original Listing Price:</span> {formatDollarsOnly(listing.OriginalListPrice)}</div>
		<div class="pb-2"><span class="font-bold">Possession:</span> {prettyJsonList(listing.Possession)}</div>
		<div class="pb-2"><span class="font-bold">Short Sale:</span> {maybeBlank(listing.PShortSale)}</div>
		<div class="pb-2"><span class="font-bold">Price Date:</span> {formatDateFromString(listing.Price_Date)}</div>
		<div class="pb-2"><span class="font-bold">Furnishing Available:</span> {maybeBlank(listing.Furnishings_Available_Y_Or_N)}</div>
		<div class="pb-2"><span class="font-bold">Bill Of Sale Amount:</span> {maybeBlank(listing.Bill_of_Sale_In_Amt__Y_Or_N)}</div>
		<div class="pb-2"><span class="font-bold">Expiration Date:</span> {maybeBlank(listing.ExpirationDate)}</div>
		<div class="pb-2"><span class="font-bold">Ownership:</span> {maybeBlank(listing.Ownership)}</div>
		<div class="pb-2"><span class="font-bold">Listing Restrictions:</span> {maybeBlank(listing.O_LISTING_RESTRICTIONS)}</div>
		<div class="pb-2"><span class="font-bold">Listing Type:</span> {maybeBlank(listing.ListingAgreement)}</div>
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Building Details</h3>

	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Primary Heated Living Area Sq Ft:</span> {maybeBlank(listing.Primary_HtdLvArSF)}</div>
		<div class="pb-2"><span class="font-bold">Additional Living Area Sq Ft:</span> {maybeBlank(listing.Additional_HtdLvArSF)}</div>
		<div class="pb-2"><span class="font-bold">Total Living Area Sq Ft:</span> {maybeBlank(listing.Total_HtdLvArSF)}</div>
		<div class="pb-2"><span class="font-bold">Asking Price Per SqFt:</span> {formatDollarsAndCents(listing.Asking_Price_Per_SqFt)}</div>
		<div class="pb-2"><span class="font-bold">Heated Living Area Sq Ft:</span> {maybeBlank(listing.HtdLvArSF)}</div>
		<div class="pb-2"><span class="font-bold">Unheated Living Area Sq Ft:</span> {maybeBlank(listing.Unheated_LvArSF)}</div>
		<div class="pb-2"><span class="font-bold">BedroomsTotal:</span> {maybeBlank(listing.BedroomsTotal)}</div>
		<div class="pb-2"><span class="font-bold">Bathrooms Full:</span> {maybeBlank(listing.BathroomsFull)}</div>
		<div class="pb-2"><span class="font-bold">Bathrooms Partial:</span> {maybeBlank(listing.BathroomsPartial)}</div>
		<div class="pb-2"><span class="font-bold">Year Built:</span> {maybeBlank(listing.YearBuilt)}</div>
		<div class="pb-2"><span class="font-bold">Garage:</span> {maybeBlank(listing.F_GARAGE)}</div>
		<div class="pb-2"><span class="font-bold">Garage Sq Ft:</span> {maybeBlank(listing.Garage_Sq_Ft)}</div>
		<div class="pb-2"><span class="font-bold">Architectural Style:</span> {prettyJsonList(listing.ArchitecturalStyle)}</div>
		<div class="pb-2"><span class="font-bold">Type:</span> {maybeBlank(listing.Type)}</div>
		<div class="pb-2"><span class="font-bold">Sub Type:</span> {maybeBlank(listing.PropertySubType)}</div>
		<div class="pb-2"><span class="font-bold">Appliances:</span> {prettyJsonList(listing.Appliances)}</div>
		<div class="pb-2"><span class="font-bold">Roof:</span> {prettyJsonList(listing.Roof)}</div>
		<div class="pb-2"><span class="font-bold">Parking:</span> {prettyJsonList(listing.ParkingFeatures)}</div>
		<div class="pb-2"><span class="font-bold">Foundation:</span> {prettyJsonList(listing.FoundationDetails)}</div>
		<div class="pb-2"><span class="font-bold">Pool:</span> {maybeBlank(listing.Pool)}</div>
		<div class="pb-2"><span class="font-bold">Pool Type:</span> {maybeBlank(listing.Pool_Type)}</div>
		<div class="pb-2"><span class="font-bold">Pool Features:</span> {prettyJsonList(listing.PoolFeatures)}</div>
		<div class="pb-2"><span class="font-bold">Screen Porch Size:</span> {maybeBlank(listing.Screen_Porch_Size)}</div>
		<div class="pb-2"><span class="font-bold">Sun Deck Size:</span> {maybeBlank(listing.Sun_Deck_Size)}</div>
		<div class="pb-2"><span class="font-bold">Builder Name:</span> {maybeBlank(listing.BuilderName)}</div>
		<div class="pb-2"><span class="font-bold">Driveway:</span> {maybeBlank(listing.H_DRIVEWAY)}</div>
		<div class="pb-2"><span class="font-bold">Insulation:</span> {maybeBlank(listing.T_INSULATION)}</div>
		<div class="pb-2"><span class="font-bold">Counter Tops:</span> {maybeBlank(listing.ZF_COUNTER_TOPS)}</div>
		<div class="pb-2"><span class="font-bold">Cooling:</span> {prettyJsonList(listing.Cooling)}</div>
		<div class="pb-2"><span class="font-bold">Interior Features:</span> {prettyJsonList(listing.InteriorFeatures)}</div>
		<div class="pb-2"><span class="font-bold">Heating:</span> {prettyJsonList(listing.Heating)}</div>
		<div class="pb-2"><span class="font-bold">Room Type:</span> {prettyJsonList(listing.RoomType)}</div>
		<div class="pb-2"><span class="font-bold">Flooring:</span> {prettyJsonList(listing.Flooring)}</div>
		<div class="pb-2"><span class="font-bold">Construction Materials:</span> {prettyJsonList(listing.ConstructionMaterials)}</div>
		<div class="pb-2"><span class="font-bold">Building Features:</span> {prettyJsonList(listing.BuildingFeatures)}</div>
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
		<div class="pb-2"><span class="font-bold">Subdivision:</span> {maybeBlank(listing.SubdivisionName)}</div>
		<div class="pb-2"><span class="font-bold">Subdivision Name:</span> {maybeBlank(listing.Full_Subdivision_Name)}</div>
		<div class="pb-2"><span class="font-bold">Deed Book:</span> {maybeBlank(listing.Deed_Book)}</div>
		<div class="pb-2"><span class="font-bold">Deed Book Page Number:</span> {maybeBlank(listing.Deed_Book_PgNumber)}</div>
		<div class="pb-2"><span class="font-bold">County Pin Number:</span> {maybeBlank(listing.Pin_Number)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Name:</span> {maybeBlank(listing.HOA_Contact_Name)}</div>
		<div class="pb-2"><span class="font-bold">Price Change:</span> {formatDate(listing.PriceChangeTimestamp)}</div>
		<div class="pb-2"><span class="font-bold">Block:</span> {maybeBlank(listing.TaxBlock)}</div>
		<div class="pb-2"><span class="font-bold">Tract:</span> {maybeBlank(listing.TaxTract)}</div>
		<div class="pb-2"><span class="font-bold">Road Surface:</span> {prettyJsonList(listing.RoadSurfaceType)}</div>
		<div class="pb-2"><span class="font-bold">Association Amenities:</span> {prettyJsonList(listing.AssociationAmenities)}</div>
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
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Property Expenses & Utilities</h3>
	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Tax Year:</span> {maybeBlank(listing.TaxYear)}</div>
		<div class="pb-2"><span class="font-bold">Annual Property Taxes:</span> {formatDollarsAndCents(listing.TaxAnnualAmount)}</div>
		<div class="pb-2"><span class="font-bold">Insurance Expenses:</span> {maybeBlank(listing.Insurance_Expenses)}</div>
		<div class="pb-2"><span class="font-bold">Home Oner Insurance Expense:</span> {maybeBlank(listing.Homeowner_Insurance)}</div>
		<div class="pb-2"><span class="font-bold">Flood Zone:</span> {maybeBlank(listing.ZH_FLOOD_ZONE)}</div>
		<div class="pb-2"><span class="font-bold">Flood Insurance Expense:</span> {maybeBlank(listing.Flood_Insurance)}</div>
		<div class="pb-2"><span class="font-bold">Wind Insurance:</span> {maybeBlank(listing.Wind_Insurance)}</div>
		<div class="pb-2"><span class="font-bold">Other Insurance:</span> {maybeBlank(listing.Other_Insurance)}</div>
		<div class="pb-2"><span class="font-bold">Other Expenses 3:</span> {maybeBlank(listing.Other_Expenses_3)}</div>
		<div class="pb-2"><span class="font-bold">Water Source:</span> {prettyJsonList(listing.WaterSource)}</div>
		<div class="pb-2"><span class="font-bold">Yearly Water Expense:</span> {maybeBlank(listing.Yr_Water_Expense)}</div>
		<div class="pb-2"><span class="font-bold">Other Yearly Expense:</span> {maybeBlank(listing.Other_Expenses)}</div>
		<div class="pb-2"><span class="font-bold">Total Yearly Expense:</span> {maybeBlank(listing.Total_Expenses)}</div>
		<div class="pb-2"><span class="font-bold">Pool Or Spa Expense:</span> {maybeBlank(listing.Pool_Or_Spa_Expense)}</div>
		<div class="pb-2"><span class="font-bold">Yearly Expense:</span> {maybeBlank(listing.Yearly_Expense_Act_Or_Est)}</div>
		<div class="pb-2"><span class="font-bold">Electric Expense:</span> {prettyJsonList(listing.Electric)}</div>
		<div class="pb-2"><span class="font-bold">Management Fee:</span> {maybeBlank(listing.Management_Fee)}</div>
		<div class="pb-2"><span class="font-bold">Yearly Elecric Expense:</span> {maybeBlank(listing.Yr_Electric_Expense)}</div>
		<div class="pb-2"><span class="font-bold">Yearly Telephone Expense:</span> {maybeBlank(listing.Yr_Telephone_Expense)}</div>
		<div class="pb-2"><span class="font-bold">Yearly Cable Tv Expense:</span> {maybeBlank(listing.Yr_Cable_TV_Expense)}</div>
		<div class="pb-2"><span class="font-bold">Contract Status Change Date:</span> {formatDate(listing.ContractStatusChangeDate)}</div>
		<div class="pb-2"><span class="font-bold">Estimated Annual Fee Amt:</span> {formatDollarsAndCents(listing.Estimated_Annual_Fee_Amt)}</div>
		<div class="pb-2"><span class="font-bold">Sewer:</span> {prettyJsonList(listing.Sewer)}</div>
		<div class="pb-2"><span class="font-bold">Septic Fee:</span> {maybeBlank(listing.Septic_Fee)}</div>
		<div class="pb-2"><span class="font-bold">Maintenance Expense:</span> {maybeBlank(listing.Maintenance_Expenses)}</div>
		<div class="pb-2"><span class="font-bold">Tax Expense:</span> {maybeBlank(listing.Tax_Expenses)}</div>
		<div class="pb-2"><span class="font-bold">Association Fee Includes:</span> {prettyJsonList(listing.AssociationFeeIncludes)}</div>
		<div class="pb-2"><span class="font-bold">Association Fee:</span> {maybeBlank(listing.AssociationFee)}</div>
		<div class="pb-2"><span class="font-bold">Pet Fee:</span> {maybeBlank(listing.Pet_Fee_Y_Or_N)}</div>
		<div class="pb-2"><span class="font-bold">Pet Fee:</span> {maybeBlank(listing.Pet_Fee_Amount)}</div>
		<div class="pb-2"><span class="font-bold">Other Expenses 2:</span> {maybeBlank(listing.Other_Expenses_2)}</div>
		<div class="pb-2"><span class="font-bold">Association Fee Yes or No:</span> {maybeBlank(listing.Assoc_____Fee_Y_Or_N_Or_Voluntary)}</div>
	</div>
</div>

<div>
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Financials</h3>
	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Bill Of Sale Amoung:</span> {maybeBlank(listing.Bill_of_Sale_Amount_Amt)}</div>
		<div class="pb-2"><span class="font-bold">Electroni Locks:</span> {maybeBlank(listing.Electronic_Locks)}</div>
		<div class="pb-2"><span class="font-bold">Construction Loan Status:</span> {maybeBlank(listing.Const_Loan_Status)}</div>
		<div class="pb-2"><span class="font-bold">Seller to Sever Oil/Gas:</span> {maybeBlank(listing.Seller_to_sever_Oil_Or_Gas)}</div>
		<div class="pb-2"><span class="font-bold">Bank/Institution Owned:</span> {maybeBlank(listing.Bank_Or__Institution_Owned)}</div>
		<div class="pb-2"><span class="font-bold">Oil/Gas Severed Pre Owner:</span> {maybeBlank(listing.Oil_Or_Gas_Severed_Pre_Owner)}</div>
		<div class="pb-2"><span class="font-bold">Oil/Gas Severed By Seller:</span> {maybeBlank(listing.Oil_Or_Gas_Severed_by_Seller)}</div>
		<div class="pb-2"><span class="font-bold">Listing Restrictions:</span> {maybeBlank(listing.ZE_LISTING_RESTRICTIONS)}</div>
		<div class="pb-2"><span class="font-bold">Exterior:</span> {maybeBlank(listing.E_EXTERIOR)}</div>
		<div class="pb-2"><span class="font-bold">HashTag of Units:</span> {maybeBlank(listing.HashTag__of_Units)}</div>
		<div class="pb-2"><span class="font-bold">Extras:</span> {maybeBlank(listing.V_EXTRAS)}</div>
		<div class="pb-2"><span class="font-bold">Covered Deck Size:</span> {maybeBlank(listing.Covered_Deck_Size)}</div>
		<div class="pb-2"><span class="font-bold">Fuel Tanks:</span> {maybeBlank(listing.Fuel_Tanks)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Name:</span> {maybeBlank(listing.HOA_Contact)}</div>
		<div class="pb-2"><span class="font-bold">Limited Service:</span> {maybeBlank(listing.Limited_Service)}</div>
		<div class="pb-2"><span class="font-bold">Primary Residence:</span> {maybeBlank(listing.Primary_Residence_Y_Or_N)}</div>
		<div class="pb-2"><span class="font-bold">Street Frontage :</span> {maybeBlank(listing.Street_Frontage)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Info:</span> {maybeBlank(listing.HOA_Contact_Info)}</div>
		<div class="pb-2"><span class="font-bold">HOA Contact Name:</span> {maybeBlank(listing.HOA_Contact_Info_Recom)}</div>
		<div class="pb-2"><span class="font-bold">Basement:</span> {prettyJsonList(listing.Basement)}</div>
	</div>
</div>

<div class="mb-12">
	<h3 class="bg-slate-200 border border-solid border-slate-400 p-4">Rental Income</h3>

	{#if listing.Est_Annual_Rental_Income_Amt}
	<div class="columns-1 md:columns-2 align-top">
		<div class="pb-2"><span class="font-bold">Annual Rental Income:</span> {maybeBlank(listing.Est_Annual_Rental_Income_Amt)}</div>
		<div class="pb-2"><span class="font-bold">Rental Performance:</span> {maybeBlank(listing.Est_Rental_Performance)}</div>
		<div class="pb-2"><span class="font-bold">Rental Cottage Name:</span> {maybeBlank(listing.Rental_Cottage_Number)}</div>
		<div class="pb-2"><span class="font-bold">Rental Performnce Last Yesr:</span> {maybeBlank(listing.Rental_Performnce_Last_Yr)}</div>
		<div class="pb-2"><span class="font-bold">Gross Income YTD Amt:</span> {maybeBlank(listing.Gross_Income_YTD_Amt)}</div>
		<div class="pb-2"><span class="font-bold">How Rented:</span> {maybeBlank(listing.How_Rented)}</div>
		<div class="pb-2"><span class="font-bold">Owner Rental Income 2024 Amount:</span> {maybeBlank(listing.Owner_Rental_Income_2024Amt)}</div>
		<div class="pb-2"><span class="font-bold">Avertised Income 2024 Amount:</span> {maybeBlank(listing.Advertised_Income_2024Amt)}</div>
		<div class="pb-2"><span class="font-bold">Owner Renatl Income 2023 Amount:</span> {maybeBlank(listing.Owner_Rental_Income_2023Amt)}</div>
		<div class="pb-2"><span class="font-bold">Avertised Income 2023 Amount:</span> {maybeBlank(listing.Advertised_Income_2023Amt)}</div>
		<div class="pb-2"><span class="font-bold">Owner Renatl Income 2022 Amount:</span> {maybeBlank(listing.Owner_Rental_Income_2022Amt)}</div>
		<div class="pb-2"><span class="font-bold">Avertised Income 2021 Amount:</span> {maybeBlank(listing.Advertised_Income_2022Amt)}</div>
		<div class="pb-2"><span class="font-bold">Owner Rental Income 2021 Amount:</span> {maybeBlank(listing.Owner_Rental_Income_2021Amt)}</div>
		<div class="pb-2"><span class="font-bold">Avertised Income 2021 Amount:</span> {maybeBlank(listing.Advertised_Income_2021Amt)}</div>
		<div class="pb-2"><span class="font-bold">Income History Year 1:</span> {maybeBlank(listing.Income_Hist_Year_1)}</div>
		<div class="pb-2"><span class="font-bold">Income History Year 1 Amount:</span> {maybeBlank(listing.Income_Hist_Year_1_Amt)}</div>
		<div class="pb-2"><span class="font-bold">Income History Year 2 :</span> {maybeBlank(listing.Income_Hist_Year_2)}</div>
		<div class="pb-2"><span class="font-bold">Income History Year 2 Amount:</span> {maybeBlank(listing.Income_Hist_Year_2_Amt)}</div>
		<div class="pb-2"><span class="font-bold">Income History Year 3:</span> {maybeBlank(listing.Income_Hist_Year_3)}</div>
		<div class="pb-2"><span class="font-bold">Income History Year 3 Amount:</span> {maybeBlank(listing.Income_Hist_Year_3_Amt)}</div>
		<div class="pb-2"><span class="font-bold">Rental Cottage_Name:</span> {maybeBlank(listing.Rental_Cottage_Name)}</div>
		<div class="pb-2"><span class="font-bold">Rental Turnover Day:</span> {maybeBlank(listing.Rental_Turnover_Day)}</div>
		<div class="pb-2"><span class="font-bold">Rental Company:</span> {maybeBlank(listing.Rental_Co)}</div>
		<div class="pb-2"><span class="font-bold">Rental Term:</span> {maybeBlank(listing.RTerm)}</div>
	</div>
	{:else}
		There is no rental income information available
	{/if}
</div>

<ListingDetailsBottom {listing} />
