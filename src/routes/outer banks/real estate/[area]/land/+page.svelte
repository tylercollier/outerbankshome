<script>
	import { getAreaNameFromParam } from '$lib/area.js';
	import AreaListingResults from '../AreaListingResults.svelte';

	export let data;
	const { area, listings } = data;
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Lots & Land For Sale</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Lots & Land For Sale</h1>

	<AreaListingResults listings={listings} area={area} />
</main>
