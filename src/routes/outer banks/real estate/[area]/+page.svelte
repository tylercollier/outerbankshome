<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} NC homes, houses, real estate and beach houses for sale </title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Homes, Houses & Beach Houses For Sale</h1>

	<AreaListingResultsPage area={area} listings={listings} />
</main>
