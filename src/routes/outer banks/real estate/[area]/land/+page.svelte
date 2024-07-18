<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Lots & Land For Sale</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Lots & Land For Sale</h1>

	<AreaListingResultsPage area={area} listings={listings} />
</main>
