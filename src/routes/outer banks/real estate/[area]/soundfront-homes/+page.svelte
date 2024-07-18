<script>
	import { getAreaNameFromParam} from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Soundfront Homes for Sale in {getAreaNameFromParam(area)}</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Soundfront Homes For Sale</h1>

	<AreaListingResultsPage area={area} listings={listings} />
</main>
