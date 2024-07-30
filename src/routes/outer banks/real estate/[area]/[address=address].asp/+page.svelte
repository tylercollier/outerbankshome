<script>
	import { formatAddress } from '$lib/address';
	import ListingDetailsLand from '$lib/components/ListingDetailsLand.svelte';
	import ListingDetailsRes from '$lib/components/ListingDetailsRes.svelte';
	import { page } from '$app/stores';

	export let data;
	$: ({ listing, isPrintPage, printHref } = data);
	$: formattedAddress = formatAddress(listing);
	$: moreInfoHref = `/MoreInfo.asp?mls=${listing.ListingId}&vreturn=${encodeURIComponent($page.url.toString())}`;
</script>

<svelte:head>
	<title>{formattedAddress} is for sale.</title>
</svelte:head>

{#if !isPrintPage}
	<h2>Listing Details For {formattedAddress}</h2>

	<div class="mb-4 flex flex-wrap gap-2">
		<a class="text-black no-underline font-bold" href={printHref}>
			<div class="inline-block bg-headerorange px-10 py-1 rounded-md shadow-sm shadow-black">
				Printable Version
			</div>
		</a>
		<a class="text-black no-underline font-bold" href={moreInfoHref}>
			<div class="inline-block bg-headerorange px-10 py-1 rounded-md shadow-sm shadow-black">
				More Info
			</div>
		</a>
		<a class="text-black no-underline font-bold" href="/just-listed.html">
			<div class="inline-block bg-headerorange px-10 py-1 rounded-md shadow-sm shadow-black">
				Email Updates
			</div>
		</a>
	</div>
{/if}

{#if listing.PropertyType === 'Land'}
	<ListingDetailsLand {listing} />
{:else}
	<ListingDetailsRes {listing} />
{/if}
