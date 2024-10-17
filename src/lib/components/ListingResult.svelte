<script>
	import { makeLinkForListing, sqftTotal } from '$lib/listing';
	import { formatAddress } from '$lib/address';
	import { formatDollarsOnly } from '$lib/money';
	import { formatDate } from '$lib/date';
	import { officeTollFreePhoneNumber } from '$lib/meta';
	import { getAreaParamFromCity } from '$lib/area';

	export let listing;
	export let urlInfix = '';

	$: infixToUse = urlInfix || getAreaParamFromCity(listing.City);
	$: link = makeLinkForListing(listing, { urlInfix: infixToUse });
	$: address = formatAddress(listing);
	$: maxLength = 200;
	$: publicRemarks =
		listing.PublicRemarks?.length < maxLength
			? listing.PublicRemarks
			: `${listing.PublicRemarks?.substring(0, maxLength)}...`;
	$: sqft = sqftTotal(listing);
	$: isSold = listing.StandardStatus === 'Closed';
</script>

<div class="bg-slate-200 border border-solid border-slate-300 p-4">
	<div>
		<div>
			<a href={link}>
				<img src={listing.MediaURL} class="max-w-[100%] pb-4" alt="" />
			</a>
		</div>
		<div class="flex flex-row items-start gap-6 pb-4">
			<div class="w-3/5">
				<div class="text-2xl font-bold">{formatDollarsOnly(listing.ListPrice)}</div>
				{#if isSold}
					<div>
						<div>Sale Price: {formatDollarsOnly(listing.ClosePrice)}</div>
						<div>Closing Date {formatDate(listing.CloseDate)}</div>
					</div>
				{/if}
				<div><a href={link}>{address}</a></div>
			</div>
			<div class="w-2/5 bg-white border border-solid border-slate-300">
				{#if listing.PropertyType === 'Residential'}
					<div>
						<div class="flex flex-row">
							<div class="w-1/2 border border-solid border-l-0 border-t-0 border-slate-300 p-2 text-center">
								{listing.BedroomsTotal} bd
							</div>
							<div class="w-1/2 border border-solid border-l-0 border-r-0 border-t-0 border-slate-300 p-2 text-center">
								{listing.BathroomsFull} ba
							</div>
						</div>
						<div class="p-2 text-center">
							{#if sqft}
								{sqft} sq ft
							{/if}
						</div>						 
					</div>
				{:else if listing.PropertyType === 'Land'}
					{#if listing.LotSizeAcres}
						<div>Lot Size: {listing.LotSizeAcres} acres</div>
					{/if}
				{/if}
			</div>
		</div>
		
		<div>
			{publicRemarks}
			{#if listing.PublicRemarks?.length > maxLength}
				<a href={link}>MORE</a>
			{/if}
		</div>
		{#if !isSold}
			<div class="mt-3"><span class="font-bold">Call Agent</span> {officeTollFreePhoneNumber}</div>
		{/if}
	</div>
	
</div>
