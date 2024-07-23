<script>
	import { officeLocalPhoneNumber, officeTollFreePhoneNumber } from '$lib/meta';
	import { formatAddress } from '$lib/address';
	import { maybeBlank } from '$lib/listing';

	export let listing;

	$: address = formatAddress(listing);
</script>
<div>
	<h3>Listing Agent Remarks</h3>

	<div>{listing.PublicRemarks}</div>
</div>

<div>
	<h3>Directions</h3>

	{listing.Directions ?? '(none)'}
</div>

<div>
	<h3>Official MLS Disclaimer</h3>

	<div>
		The data relating to real estate for sale on this web site comes from the Broker Reciprocity Program of the Outer
		Banks Association of REALTORS. This property located at {address} is provided courtesy of {listing.ListOfficeName}
		{listing.ListingBrokerAttribution ?? ''}. Information is believed to be accurate but is not warranted. Copyrighted by
		Outer Banks Association of REALTORS. All Rights Reserved. IDX information is provided by Shore Realty of the OBX
		exclusively for consumers, personal, non-commercial use and may not be used for any purpose other than to identify
		prospective properties consumers may be interested in purchasing. If this page disappears from this site it means
		the property at {address} is no longer available for sale. If you are interested in this property or have any
		questions about buying or selling real estate on the Outer Banks call Shore Realty. Local {officeLocalPhoneNumber}
		OR {officeTollFreePhoneNumber}.
	</div>
</div>

<div>
	<h3>Schools</h3>

	<table  class="listing-details-section">
		<tbody>
		<tr>
			<td>Elementary School District</td>
			<td>{maybeBlank(listing.Elementary_School_District)}</td>
		</tr>
		<tr>
			<td>Middle School District</td>
			<td>{maybeBlank(listing.Middle_School_District)}</td>
		</tr>
		<tr>
			<td>High School District</td>
			<td>{maybeBlank(listing.High_School_District)}</td>
		</tr>
		</tbody>
	</table>
</div>
