<script>
	import { formatAddress } from '$lib/address';
	import ListingDetailsLand from '$lib/components/ListingDetailsLand.svelte';
	import ListingDetailsRes from '$lib/components/ListingDetailsRes.svelte';

	export let data;
	$: ({ listing, isPrintPage, printHref } = data);
	$: formattedAddress = formatAddress(listing);
</script>

<svelte:head>
	<title>{formattedAddress} is for sale.</title>
</svelte:head>

{#if !isPrintPage}
	<h2>Listing Details For {formattedAddress}</h2>

	<div class="mb-4">
			<a class="block text-black no-underline font-bold" href={printHref}>
				<div class="inline-block bg-headerorange px-10 py-1 rounded-md shadow-sm shadow-black">
					Printable Version
				</div>
			</a>
	</div>
{/if}

{#if listing.PropertyType === 'Land'}
	<ListingDetailsLand {listing} />
{:else}
	<ListingDetailsRes {listing} />
{/if}
