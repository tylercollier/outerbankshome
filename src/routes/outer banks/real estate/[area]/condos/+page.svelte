<script>
	import { getAreaNameFromParam} from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ area, activeListings, soldListings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Condos and Town Houses for Sale in {getAreaNameFromParam(area)}</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Condos and Town Houses For Sale</h1>

	<AreaListingResultsPage area={area} activeListings={activeListings} soldListings={soldListings} />
</main>
