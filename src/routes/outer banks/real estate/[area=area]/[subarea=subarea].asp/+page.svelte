<script>
	import { allowedSubareas } from '$lib/subarea';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;

	$: ({ areaParam, activeListings, soldListings, subarea, proseComponent } = data);
	$: subareaName = allowedSubareas[areaParam].find(x => x.slug === subarea.slug).displayName;
</script>

<svelte:head>
	<title>{subareaName} For Sale</title>
</svelte:head>

<h1>{subareaName}  For Sale</h1>

<AreaListingResultsPage {areaParam} {activeListings} {soldListings}>
	<svelte:fragment slot="topProse">
		{#if proseComponent}
			<svelte:component this={proseComponent} />
			<hr class="orange" />
		{/if}
	</svelte:fragment>
</AreaListingResultsPage>
