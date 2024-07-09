<script>
	import { formatAddress } from '$lib/address';
	import ImageCarousel from '../../../../../components/ImageCarousel.svelte';

	export let data;

	const { listing } = data;
	const address = formatAddress(listing);
</script>

<svelte:head>
	<title>{address} is for sale.</title>
</svelte:head>

<main>
	<h2>{address}</h2>

	<ImageCarousel images={listing.Media} />
</main>
