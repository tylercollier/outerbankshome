<script>
	import { getTitleTag, getH1 } from '$lib/category';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ areaParam, activeListings, categoryParam, soldListings, proseComponent } = data);
</script>

<svelte:head>
	<title>{getTitleTag(areaParam, categoryParam)}</title>
</svelte:head>

<h1>{getH1(areaParam, categoryParam)}</h1>

<AreaListingResultsPage {areaParam} {activeListings} {soldListings}>
	<svelte:fragment slot="bottomProse">
		<div class="my-12">
		{#if proseComponent}
			<svelte:component this={proseComponent} />
		{/if}
	</div>
	</svelte:fragment>
</AreaListingResultsPage>
