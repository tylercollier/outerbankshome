<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ areaParam, activeListings, soldListings } = data);
	$: areaName = getAreaNameFromParam(areaParam);
</script>

<svelte:head>
	<title>{areaName} Waterfront Homes For Sale</title>
</svelte:head>

<main>
	<h1>{areaName} Water Front Homes</h1>

	<AreaListingResultsPage {areaParam} displayName={areaName} {activeListings} {soldListings} />
</main>
