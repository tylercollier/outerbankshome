<script>
	import { getAreaNameFromParam} from '$lib/area';
	import CategoryLinks from '$lib/components/CategoryLinks.svelte';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Oceanfront and Beachfront Homes for Sale in {getAreaNameFromParam(area)}</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Oceanfront and Beachfront Homes For Sale</h1>

	<AreaListingResultsPage area={area} listings={listings} />
</main>
