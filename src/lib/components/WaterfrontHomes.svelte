<script>
	import { getAreaNameFromParam } from '$lib/area.js';
	import AreaListingResults from './AreaListingResults.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Waterfront Homes For Sale</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Water Front Homes</h1>

	<AreaListingResults listings={listings} area={area} />
</main>
