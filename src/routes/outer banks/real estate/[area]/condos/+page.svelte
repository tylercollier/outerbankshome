<script>
	import AreaListingResults from '../AreaListingResults.svelte';
	import { getAreaNameFromParam} from '$lib/area';

	export let data;
	const { area, listings } = data;
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Condos and Town Houses for Sale in {getAreaNameFromParam(area)}</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Condos and Town Houses For Sale</h1>

	<AreaListingResults listings={listings} area={area} />
</main>
