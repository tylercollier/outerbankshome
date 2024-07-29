<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';
	import CategoryLinks from '$lib/components/CategoryLinks.svelte';
	import SubdivisionLinks from '$lib/components/SubdivisionLinks.svelte';

	export let areaParam;
	export let activeListings;
	export let soldListings;
	export let proseComponent = null;
</script>

<CategoryLinks {areaParam} />

<AreaListingResults listings={activeListings} {areaParam} />

<hr class="orange" />

<h1>Sold Recently</h1>

<AreaListingResults listings={soldListings} {areaParam} />

<hr class="orange" />

{#if proseComponent}
	<svelte:component this={proseComponent} />
	<hr class="orange" />
{/if}

<SubdivisionLinks {areaParam} />
