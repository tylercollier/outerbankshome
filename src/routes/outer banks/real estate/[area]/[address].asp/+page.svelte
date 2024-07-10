<script>
	import { formatAddress } from '$lib/address';
	import ListingDetailsLand from './ListingDetailsLand.svelte';
	import ListingDetailsRes from './ListingDetailsRes.svelte';

	export let data;
	const { listing } = data;
	const formattedAddress = formatAddress(listing);
</script>

<svelte:head>
	<title>{formattedAddress} is for sale.</title>
</svelte:head>

<main>
	<h2>Listing Details For {formattedAddress}</h2>

	{#if listing.PropertyType === 'Land'}
		<ListingDetailsLand listing={listing} />
	{:else}
		<ListingDetailsRes listing={listing} />
	{/if}
</main>
