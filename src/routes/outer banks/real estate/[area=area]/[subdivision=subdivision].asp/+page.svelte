<script>
	import { allowedSubdivisions } from '$lib/subdivision';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;

	$: ({ areaParam, activeListings, soldListings, subdivision, proseComponent } = data);
	$: subdivisionName = allowedSubdivisions[areaParam].find(x => x.slug === subdivision.slug).name;
</script>

<svelte:head>
	<title>{subdivisionName} Real Estate and homes for sale</title>
</svelte:head>

<h1>{subdivisionName} Homes, Houses & Beach Houses For Sale</h1>

<AreaListingResultsPage {areaParam} {activeListings} {soldListings}>
	<svelte:fragment slot="bottomProse">
		{#if proseComponent}
			<svelte:component this={proseComponent} />
			<hr class="orange" />
		{/if}
	</svelte:fragment>
</AreaListingResultsPage>
