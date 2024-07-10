<script>
	import AreaListingResults from './AreaListingResults.svelte';
	import { getAreaNameFromParam } from '$lib/area.js';

	export let data;
	const { area, listings } = data;
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} NC homes, houses, real estate and beach houses for sale </title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Homes, Houses & Beach Houses For Sale</h1>

	<AreaListingResults listings={listings} area={area} />
</main>
