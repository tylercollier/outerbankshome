<script>
	import { allowedSubdivisions } from '$lib/subdivision';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;

	$: ({ areaParam, activeListingsWithMeta, soldListingsWithMeta, subdivision, proseComponent } = data);
	$: subdivisionName = allowedSubdivisions[areaParam].find(x => x.slug === subdivision.slug).displayName;
	$: titleInfix = subdivision.titleInfix ?? 'homes';
	$: h1Infix = subdivision.h1Infix ?? 'Homes, Houses & Beach Houses';
</script>

<svelte:head>
	<title>{subdivisionName} Real Estate and {titleInfix} for sale</title>
</svelte:head>

<h1>{subdivisionName} {h1Infix} For Sale</h1>

<img
	onerror='this.style.display = "none"'
	src="/images/area/{areaParam}/subdivision/{subdivision.slug}.jpeg"
	alt="{subdivisionName} subdivision sign"
	style="width:30%;" border="0" float="left"
/>

<AreaListingResultsPage {areaParam} {activeListingsWithMeta} {soldListingsWithMeta}>
	<svelte:fragment slot="bottomProse">
		{#if proseComponent}
			<svelte:component this={proseComponent} />
			<hr class="orange" />
		{/if}
	</svelte:fragment>
</AreaListingResultsPage>
