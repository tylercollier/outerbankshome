<script>
	import { getAreaNameFromParam } from '$lib/area';
	import AreaListingResults from './AreaListingResults.svelte';
	import CategoryLinks from '$lib/components/CategoryLinks.svelte';

	export let data;
	$: ({ area, listings } = data);
</script>

<svelte:head>
	<title>{getAreaNameFromParam(area)} Waterfront Homes For Sale</title>
</svelte:head>

<main>
	<h1>{getAreaNameFromParam(area)} Water Front Homes</h1>

	<CategoryLinks area={area} />

	<AreaListingResults listings={listings} area={area} />
</main>
