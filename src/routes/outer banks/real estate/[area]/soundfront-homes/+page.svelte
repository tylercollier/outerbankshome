<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ areaParam, activeListings, soldListings } = data);
	$: areaName = getAreaNameFromParam(areaParam);
</script>

<svelte:head>
	<title
		>{areaName} Soundfront Homes for Sale in {areaName}</title
	>
</svelte:head>

<main>
	<h1>{areaName} Soundfront Homes For Sale</h1>

	<AreaListingResultsPage {areaParam} displayName={areaName} {activeListings} {soldListings} />
</main>
