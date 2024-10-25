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
	$: publicRemarks = listing.PublicRemarks;
	$: sqft = sqftTotal(listing);
	$: isSold = listing.StandardStatus === 'Closed';
</script>

<div class="bg-slate-200 border border-solid border-slate-300 p-4">
	<div>
		<div class="flex gap-4 md:gap-0 flex-row md:flex-col">
			<div class="w-1/2 md:w-full">
				<a href={link}>
					<img src={listing.MediaURL} class="max-w-[100%] sm:pb-2 md:pb-4" alt="" />
				</a>
			</div>
			<div class="md:flex items-start gap-4 pb-4">
				<div class="md:w-3/5 lg:w-1/2">
					<div class="text-2xl font-bold">{formatDollarsOnly(listing.ListPrice)}</div>
					{#if isSold}
						<div>
							<div>Sale Price: {formatDollarsOnly(listing.ClosePrice)}</div>
							<div>Closing Date {formatDate(listing.CloseDate)}</div>
						</div>
					{/if}
					<div class="mb-2 md:mb-0"><a href={link}>{address}</a></div>
				</div>
				<div class="md:w-2/5 lg:w-1/2 md:bg-white md:border md:border-solid md:border-slate-300">
					{#if listing.PropertyType === 'Residential'}
						<div class="flex flex-row md:flex-col">
							<div class="flex flex-row md:w-full">
								<div class="md:border md:border-solid md:border-l-0 md:border-t-0 md:border-slate-300 p-0 md:p-2 mr-3 md:mr-0 md:text-center md:w-1/2">
									{listing.BedroomsTotal} bd
								</div>
								<div class="md:border md:border-solid md:border-l-0 md:border-r-0 md:border-t-0 md:border-slate-300 p-0 md:p-2 mr-3 md:mr-0 md:text-center md:w-1/2">
									{listing.BathroomsFull} ba
								</div>
							</div>
							{#if sqft}
								<div class="p-0 md:p-2 mr-3 md:mr-0 md:text-center md:w-full">
									{sqft} sq ft
								</div>
							{/if}
						</div>
					{:else if listing.PropertyType === 'Land'}
						{#if listing.LotSizeAcres}
							<div class="p-2">Lot Size: {listing.LotSizeAcres} acres</div>
						{/if}
					{/if}
				</div>
			</div>
		</div>
		<div class="line-clamp-2 md:line-clamp-4">
			{publicRemarks}
		</div>
		<a href={link}>MORE</a>
		{#if !isSold}
			<div class="invisible md:visible mt-3"><span class="font-bold">Call Agent</span> {officeTollFreePhoneNumber}</div>
		{/if}
	</div>
	
</div>
