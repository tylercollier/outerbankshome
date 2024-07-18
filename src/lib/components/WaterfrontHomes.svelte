<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Waterfront Homes For Sale</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Water Front Homes</h1>

	<AreaListingResultsPage area={area} listings={listings} />
</main>
