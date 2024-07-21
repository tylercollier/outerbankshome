<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ areaParam, activeListings, soldListings, proseComponent } = data);
	$: areaName = getAreaNameFromParam(areaParam);
</script>

<svelte:head>
	<title
		>{areaName} NC homes, houses, real estate and beach houses for sale
	</title>
</svelte:head>

<main>
	<h1>{areaName} Homes, Houses & Beach Houses For Sale</h1>
	{#if proseComponent}
		<svelte:component this={proseComponent} />
	{/if}

	<AreaListingResultsPage {areaParam} displayName={areaName} {activeListings} {soldListings} />
</main>
