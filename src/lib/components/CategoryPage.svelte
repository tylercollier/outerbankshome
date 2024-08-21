<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ areaParam, activeListings, soldListings, proseComponent } = data);
	$: areaName = getAreaNameFromParam(areaParam);
</script>

<svelte:head>
	<title>{areaName} NC homes, houses, real estate and beach houses for sale</title>
</svelte:head>

<h1>{areaName} Homes, Houses & Beach Houses For Sale</h1>

<AreaListingResultsPage {areaParam} {activeListings} {soldListings}>
	<svelte:fragment slot="bottomProse">
		{#if proseComponent}
			<svelte:component this={proseComponent} />
			<hr class="orange" />
		{/if}
	</svelte:fragment>
</AreaListingResultsPage>
