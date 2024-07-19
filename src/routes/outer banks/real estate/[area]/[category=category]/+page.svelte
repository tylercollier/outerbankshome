<script>
	import { getAreaNameFromParam } from '$lib/area';
	import { getTitleTag, getH1 } from '$lib/category';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ areaParam, categoryParam, activeListings, soldListings } = data);
	$: areaName = getAreaNameFromParam(areaParam);
	$: title = getTitleTag(areaParam, categoryParam);
	$: h1 = getH1(areaParam, categoryParam);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1>{h1}</h1>

	<AreaListingResultsPage {areaParam} displayName={areaName} {activeListings} {soldListings} />
</main>
