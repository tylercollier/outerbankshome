<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';
	import { getAreaNameFromParam} from '$lib/area';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Condos and Town Houses for Sale in {getAreaNameFromParam(area)}</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Condos and Town Houses For Sale</h1>

	<AreaListingResults listings={listings} area={area} />
</main>
