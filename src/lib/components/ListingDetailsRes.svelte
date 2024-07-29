<script>
	import ListingDetailsBottom from '$lib/components/ListingDetailsBottom.svelte';
	import { formatDollarsOnly, formatDollarsAndCents } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { prettyJsonList } from '$lib/listing';
	import './ListingDetailsPage.scss';
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
				<td>Furnishing Available</td>
				<td>{maybeBlank(listing.Furnishings_Available_Y_Or_N)}</td>
			</tr>
			<tr>
				<td>Bill Of Sale Amount</td>
				<td>{maybeBlank(listing.Bill_of_Sale_In_Amt__Y_Or_N)}</td>
			</tr>
			<tr>
				<td>Expiration Date</td>
				<td>{maybeBlank(listing.ExpirationDate)}</td>
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
		</tbody>
	</table>
</div>

<div>
	<h3>Building Details</h3>

	<table class="listing-details-section">
		<tbody>
			<tr>
				<td>Primary Heated Living Area Sq Ft</td>
				<td>{maybeBlank(listing.Primary_HtdLvArSF)}</td>
			</tr>
			<tr>
				<td>Additional Living Area Sq Ft</td>
				<td>{maybeBlank(listing.Additional_HtdLvArSF)}</td>
			</tr>
			<tr>
				<td>Total Living Area Sq Ft</td>
				<td>{maybeBlank(listing.Total_HtdLvArSF)}</td>
			</tr>
			<tr>
				<td>Asking Price Per SqFt</td>
				<td>{formatDollarsAndCents(listing.Asking_Price_Per_SqFt)}</td>
			</tr>
			<tr>
				<td>Heated Living Area Sq Ft</td>
				<td>{maybeBlank(listing.HtdLvArSF)}</td>
			</tr>
			<tr>
				<td>Unheated Living Area Sq Ft</td>
				<td>{maybeBlank(listing.Unheated_LvArSF)}</td>
			</tr>
			<tr>
				<td>BedroomsTotal </td>
				<td>{maybeBlank(listing.BedroomsTotal)}</td>
			</tr>
			<tr>
				<td>Bathrooms Full</td>
				<td>{maybeBlank(listing.BathroomsFull)}</td>
			</tr>
			<tr>
				<td>Bathrooms Partial</td>
				<td>{maybeBlank(listing.BathroomsPartial)}</td>
			</tr>
			<tr>
				<td>Year Built</td>
				<td>{maybeBlank(listing.YearBuilt)}</td>
			</tr>
			<tr>
				<td>Garage</td>
				<td>{maybeBlank(listing.F_GARAGE)}</td>
			</tr>
			<tr>
				<td>Garage Sq Ft</td>
				<td>{maybeBlank(listing.Garage_Sq_Ft)}</td>
			</tr>
			<tr>
				<td>Architectural Style</td>
				<td>{prettyJsonList(listing.ArchitecturalStyle)}</td>
			</tr>
			<tr>
				<td>Type</td>
				<td>{maybeBlank(listing.Type)}</td>
			</tr>
			<tr>
				<td>Sub Type</td>
				<td>{maybeBlank(listing.PropertySubType)}</td>
			</tr>
			<tr>
				<td>Appliances</td>
				<td>{prettyJsonList(listing.Appliances)}</td>
			</tr>
			<tr>
				<td>Roof</td>
				<td>{prettyJsonList(listing.Roof)}</td>
			</tr>
			<tr>
				<td>Parking</td>
				<td>{prettyJsonList(listing.ParkingFeatures)}</td>
			</tr>
			<tr>
				<td>Foundation</td>
				<td>{prettyJsonList(listing.FoundationDetails)}</td>
			</tr>
			<tr>
				<td>Pool</td>
				<td>{maybeBlank(listing.Pool)}</td>
			</tr>
			<tr>
				<td>Pool Type</td>
				<td>{maybeBlank(listing.Pool_Type)}</td>
			</tr>
			<tr>
				<td>Pool Features</td>
				<td>{prettyJsonList(listing.PoolFeatures)}</td>
			</tr>
			<tr>
				<td>Screen Porch Size</td>
				<td>{maybeBlank(listing.Screen_Porch_Size)}</td>
			</tr>
			<tr>
				<td>Sun Deck Size</td>
				<td>{maybeBlank(listing.Sun_Deck_Size)}</td>
			</tr>
			<tr>
				<td>Builder Name</td>
				<td>{maybeBlank(listing.BuilderName)}</td>
			</tr>
			<tr>
				<td>Driveway</td>
				<td>{maybeBlank(listing.H_DRIVEWAY)}</td>
			</tr>
			<tr>
				<td>Insulation</td>
				<td>{maybeBlank(listing.T_INSULATION)}</td>
			</tr>
			<tr>
				<td>Counter Tops</td>
				<td>{maybeBlank(listing.ZF_COUNTER_TOPS)}</td>
			</tr>
			<tr>
				<td>Cooling</td>
				<td>{prettyJsonList(listing.Cooling)}</td>
			</tr>
			<tr>
				<td>Interior Features</td>
				<td>{prettyJsonList(listing.InteriorFeatures)}</td>
			</tr>
			<tr>
				<td>Heating</td>
				<td>{prettyJsonList(listing.Heating)}</td>
			</tr>
			<tr>
				<td>Room Type</td>
				<td>{prettyJsonList(listing.RoomType)}</td>
			</tr>
			<tr>
				<td>Flooring</td>
				<td>{prettyJsonList(listing.Flooring)}</td>
			</tr>
			<tr>
				<td>Construction Materials</td>
				<td>{prettyJsonList(listing.ConstructionMaterials)}</td>
			</tr>
			<tr>
				<td>Building Features</td>
				<td>{prettyJsonList(listing.BuildingFeatures)}</td>
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
				<td>HOA Contact Name</td>
				<td>{maybeBlank(listing.HOA_Contact_Name)}</td>
			</tr>
			<tr>
				<td>Price Change</td>
				<td>{formatDate(listing.PriceChangeTimestamp)}</td>
			</tr>
			<tr>
				<td>Block</td>
				<td>{maybeBlank(listing.TaxBlock)}</td>
			</tr>
			<tr>
				<td>Tract</td>
				<td>{maybeBlank(listing.TaxTract)}</td>
			</tr>
			<tr>
				<td>Road Surface</td>
				<td>{prettyJsonList(listing.RoadSurfaceType)}</td>
			</tr>
			<tr>
				<td>Association Amenities</td>
				<td>{prettyJsonList(listing.AssociationAmenities)}</td>
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
				<td>Insurance Expenses</td>
				<td>{maybeBlank(listing.Insurance_Expenses)}</td>
			</tr>
			<tr>
				<td>Home Oner Insurance Expense</td>
				<td>{maybeBlank(listing.Homeowner_Insurance)}</td>
			</tr>
			<tr>
				<td>Flood Zone</td>
				<td>{maybeBlank(listing.ZH_FLOOD_ZONE)}</td>
			</tr>
			<tr>
				<td>Flood Insurance Expense</td>
				<td>{maybeBlank(listing.Flood_Insurance)}</td>
			</tr>
			<tr>
				<td>Wind Insurance</td>
				<td>{maybeBlank(listing.Wind_Insurance)}</td>
			</tr>
			<tr>
				<td>Other Insurance</td>
				<td>{maybeBlank(listing.Other_Insurance)}</td>
			</tr>
			<tr>
				<td>Other Expenses 3</td>
				<td>{maybeBlank(listing.Other_Expenses_3)}</td>
			</tr>
			<tr>
				<td>Water Source</td>
				<td>{prettyJsonList(listing.WaterSource)}</td>
			</tr>
			<tr>
				<td>Yearly Water Expense</td>
				<td>{maybeBlank(listing.Yr_Water_Expense)}</td>
			</tr>
			<tr>
				<td>Other Yearly Expense</td>
				<td>{maybeBlank(listing.Other_Expenses)}</td>
			</tr>
			<tr>
				<td>Total Yearly Expense</td>
				<td>{maybeBlank(listing.Total_Expenses)}</td>
			</tr>
			<tr>
				<td>Pool Or Spa Expense</td>
				<td>{maybeBlank(listing.Pool_Or_Spa_Expense)}</td>
			</tr>
			<tr>
				<td>Yearly Expense</td>
				<td>{maybeBlank(listing.Yearly_Expense_Act_Or_Est)}</td>
			</tr>
			<tr>
				<td>Electric Expense</td>
				<td>{prettyJsonList(listing.Electric)}</td>
			</tr>
			<tr>
				<td>Management Fee</td>
				<td>{maybeBlank(listing.Management_Fee)}</td>
			</tr>
			<tr>
				<td>Yearly Elecric Expense</td>
				<td>{maybeBlank(listing.Yr_Electric_Expense)}</td>
			</tr>
			<tr>
				<td>Yearly Telephone Expense</td>
				<td>{maybeBlank(listing.Yr_Telephone_Expense)}</td>
			</tr>
			<tr>
				<td>Yearly Cable Tv Expense</td>
				<td>{maybeBlank(listing.Yr_Cable_TV_Expense)}</td>
			</tr>
			<tr>
				<td>Contract Status Change Date</td>
				<td>{formatDate(listing.ContractStatusChangeDate)}</td>
			</tr>
			<tr>
				<td>Estimated Annual Fee Amt</td>
				<td>{formatDollarsAndCents(listing.Estimated_Annual_Fee_Amt)}</td>
			</tr>
			<tr>
				<td>Sewer</td>
				<td>{prettyJsonList(listing.Sewer)}</td>
			</tr>
			<tr>
				<td>Septic Fee</td>
				<td>{maybeBlank(listing.Septic_Fee)}</td>
			</tr>
			<tr>
				<td>Maintenance Expense</td>
				<td>{maybeBlank(listing.Maintenance_Expenses)}</td>
			</tr>
			<tr>
				<td>Tax Expense</td>
				<td>{maybeBlank(listing.Tax_Expenses)}</td>
			</tr>
			<tr>
				<td>Association Fee Includes</td>
				<td>{prettyJsonList(listing.AssociationFeeIncludes)}</td>
			</tr>
			<tr>
				<td>Association Fee</td>
				<td>{maybeBlank(listing.AssociationFee)}</td>
			</tr>
			<tr>
				<td>Pet Fee</td>
				<td>{maybeBlank(listing.Pet_Fee_Y_Or_N)}</td>
			</tr>
			<tr>
				<td>Pet Fee</td>
				<td>{maybeBlank(listing.Pet_Fee_Amount)}</td>
			</tr>
			<tr>
				<td>Other Expenses 2</td>
				<td>{maybeBlank(listing.Other_Expenses_2)}</td>
			</tr>
			<tr>
				<td>Association Fee Yes or No</td>
				<td>{maybeBlank(listing.Assoc_____Fee_Y_Or_N_Or_Voluntary)}</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Financials</h3>

	<table class="listing-details-section">
		<tbody>
			<tr>
				<td>Bill Of Sale Amoung</td>
				<td>{maybeBlank(listing.Bill_of_Sale_Amount_Amt)}</td>
			</tr>
			<tr>
				<td>Electroni Locks</td>
				<td>{maybeBlank(listing.Electronic_Locks)}</td>
			</tr>
			<tr>
				<td>Construction Loan Status</td>
				<td>{maybeBlank(listing.Const_Loan_Status)}</td>
			</tr>
			<tr>
				<td>Seller to Sever Oil/Gas</td>
				<td>{maybeBlank(listing.Seller_to_sever_Oil_Or_Gas)}</td>
			</tr>
			<tr>
				<td>Bank/Institution Owned</td>
				<td>{maybeBlank(listing.Bank_Or__Institution_Owned)}</td>
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
				<td>Exterior</td>
				<td>{maybeBlank(listing.E_EXTERIOR)}</td>
			</tr>
			<tr>
				<td>HashTag of Units</td>
				<td>{maybeBlank(listing.HashTag__of_Units)}</td>
			</tr>
			<tr>
				<td>Extras</td>
				<td>{maybeBlank(listing.V_EXTRAS)}</td>
			</tr>
			<tr>
				<td>Covered Deck Size</td>
				<td>{maybeBlank(listing.Covered_Deck_Size)}</td>
			</tr>
			<tr>
				<td>Fuel Tanks</td>
				<td>{maybeBlank(listing.Fuel_Tanks)}</td>
			</tr>
			<tr>
				<td>HOA Contact Name</td>
				<td>{maybeBlank(listing.HOA_Contact)}</td>
			</tr>
			<tr>
				<td>Limited Service</td>
				<td>{maybeBlank(listing.Limited_Service)}</td>
			</tr>
			<tr>
				<td>Primary Residence</td>
				<td>{maybeBlank(listing.Primary_Residence_Y_Or_N)}</td>
			</tr>
			<tr>
				<td>Street Frontage </td>
				<td>{maybeBlank(listing.Street_Frontage)}</td>
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
				<td>Basement</td>
				<td>{prettyJsonList(listing.Basement)}</td>
			</tr>
		</tbody>
	</table>
</div>

<div>
	<h3>Rental Income</h3>

	{#if listing.Est_Annual_Rental_Income_Amt}
		<table class="listing-details-section">
			<tbody>
				<tr>
					<td>Annual Rental Income</td>
					<td>{maybeBlank(listing.Est_Annual_Rental_Income_Amt)}</td>
				</tr>
				<tr>
					<td>Rental Performance</td>
					<td>{maybeBlank(listing.Est_Rental_Performance)}</td>
				</tr>
				<tr>
					<td>Rental Cottage Name</td>
					<td>{maybeBlank(listing.Rental_Cottage_Number)}</td>
				</tr>
				<tr>
					<td>Rental Performnce Last Yesr</td>
					<td>{maybeBlank(listing.Rental_Performnce_Last_Yr)}</td>
				</tr>
				<tr>
					<td>Gross Income YTD Amt</td>
					<td>{maybeBlank(listing.Gross_Income_YTD_Amt)}</td>
				</tr>
				<tr>
					<td>How Rented</td>
					<td>{maybeBlank(listing.How_Rented)}</td>
				</tr>
				<tr>
					<td>Owner Rental Income 2024 Amount</td>
					<td>{maybeBlank(listing.Owner_Rental_Income_2024Amt)}</td>
				</tr>
				<tr>
					<td>Avertised Income 2024 Amount</td>
					<td>{maybeBlank(listing.Advertised_Income_2024Amt)}</td>
				</tr>
				<tr>
					<td>Owner Renatl Income 2023 Amount</td>
					<td>{maybeBlank(listing.Owner_Rental_Income_2023Amt)}</td>
				</tr>
				<tr>
					<td>Avertised Income 2023 Amount</td>
					<td>{maybeBlank(listing.Advertised_Income_2023Amt)}</td>
				</tr>
				<tr>
					<td>Owner Renatl Income 2022 Amount</td>
					<td>{maybeBlank(listing.Owner_Rental_Income_2022Amt)}</td>
				</tr>
				<tr>
					<td>Avertised Income 2021 Amount</td>
					<td>{maybeBlank(listing.Advertised_Income_2022Amt)}</td>
				</tr>
				<tr>
					<td>Owner Rental Income 2021 Amount</td>
					<td>{maybeBlank(listing.Owner_Rental_Income_2021Amt)}</td>
				</tr>
				<tr>
					<td>Avertised Income 2021 Amount</td>
					<td>{maybeBlank(listing.Advertised_Income_2021Amt)}</td>
				</tr>
				<tr>
					<td>Income History Year 1</td>
					<td>{maybeBlank(listing.Income_Hist_Year_1)}</td>
				</tr>
				<tr>
					<td>Income History Year 1 Amount</td>
					<td>{maybeBlank(listing.Income_Hist_Year_1_Amt)}</td>
				</tr>
				<tr>
					<td>Income History Year 2 </td>
					<td>{maybeBlank(listing.Income_Hist_Year_2)}</td>
				</tr>
				<tr>
					<td>Income History Year 2 Amount</td>
					<td>{maybeBlank(listing.Income_Hist_Year_2_Amt)}</td>
				</tr>
				<tr>
					<td>Income History Year 3</td>
					<td>{maybeBlank(listing.Income_Hist_Year_3)}</td>
				</tr>
				<tr>
					<td>Income History Year 3 Amount</td>
					<td>{maybeBlank(listing.Income_Hist_Year_3_Amt)}</td>
				</tr>
				<tr>
					<td>Rental Cottage_Name</td>
					<td>{maybeBlank(listing.Rental_Cottage_Name)}</td>
				</tr>
				<tr>
					<td>Rental Turnover Day</td>
					<td>{maybeBlank(listing.Rental_Turnover_Day)}</td>
				</tr>
				<tr>
					<td>Rental Company</td>
					<td>{maybeBlank(listing.Rental_Co)}</td>
				</tr>
				<tr>
					<td>Rental Term</td>
					<td>{maybeBlank(listing.RTerm)}</td>
				</tr>
			</tbody>
		</table>
	{:else}
		There is no rental income information available
	{/if}
</div>

<ListingDetailsBottom {listing} />
