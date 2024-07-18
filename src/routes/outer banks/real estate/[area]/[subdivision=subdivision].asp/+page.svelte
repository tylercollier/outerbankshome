<script>
	import { allowedSubdivisions } from '$lib/area';
	import AreaListingResultsPage from '$lib/components/AreaListingResultsPage.svelte';

	export let data;
	$: ({ area, listings, subdivision } = data);
	$: subdivisionName = allowedSubdivisions[area].find(x => x.slug === subdivision.slug).name;
</script>

<svelte:head>
	<title>{subdivisionName} Real Estate and homes for sale </title>
</svelte:head>

<main>
	<h1>{subdivisionName} Homes, Houses & Beach Houses For Sale</h1>

	<AreaListingResultsPage area={area} listings={listings} />
</main>
