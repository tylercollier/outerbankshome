<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';
	import { getAreaNameFromParam } from '$lib/area';
	import CategoryLinks from '$lib/components/CategoryLinks.svelte';
	import SubdivisionLinks from '$lib/components/SubdivisionLinks.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} NC homes, houses, real estate and beach houses for sale </title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Homes, Houses & Beach Houses For Sale</h1>

	<CategoryLinks area={area} />

	<AreaListingResults listings={listings} area={area} />

	<SubdivisionLinks area={area} />
</main>
