<script>
	import { makeLinkForListing, sqftAsStr } from '$lib/listing';
	import { formatAddress } from '$lib/address';
	import { formatDollarsOnly } from '$lib/money';

	export let listing;

	const link = makeLinkForListing(listing);
	const address = formatAddress(listing);
	const maxLength = 200;
	const publicRemarks = listing.PublicRemarks.length < maxLength ? listing.PublicRemarks : `${listing.PublicRemarks.substring(0, maxLength)}...`;
</script>

<div class="flex justify-between items-center">
	<div>
		<div><a href={link}>{address}</a></div>
		<div class="font-bold">Asking: {formatDollarsOnly(listing.ListPrice)}</div>
		{#if listing.PropertyType === 'Residential'}
			<div>
				Beds-{listing.BedroomsTotal} Baths-{listing.BathroomsFull}
				{#if listing.Asking_Price_Per_SqFt}
					SqFt: {sqftAsStr(listing)}
				{/if}
			</div>
		{/if}
		<div>
			{publicRemarks}
			{#if listing.PublicRemarks.length > maxLength}
				<a href={link}>MORE</a>
			{/if}
		</div>
		<div><span class="font-bold">Call Agent</span> 800-647-1868</div>
	</div>
	<div>
		<a href={link}>
			<img src={listing.MediaURL} class="w-[120px]" alt="">
		</a>
	</div>
</div>
