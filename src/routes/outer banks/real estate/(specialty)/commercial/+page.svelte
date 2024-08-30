<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';

	export let data;
	$: ({ listings } = data);
</script>

<svelte:head>
	<title>Outer Banks Commercial Real Estate</title>
</svelte:head>

<h1>Outer Banks Commercial Real Estate</h1>

<div>This list below contains the Commercial Real Estate currently for sale on the Outer Banks.</div>

<AreaListingResults listings={listings} areaParam="" />
