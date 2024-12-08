<script>
import ListingResults from '$lib/components/ListingResults.svelte';

export let data;
$: ({ listingsWithMeta } = data);
</script>

<svelte:head>
	<title>Outer Banks time share and Co-ownership properties for sale</title>
</svelte:head>

<h1>Outer Banks Time Share and Co-ownership Properties</h1>

<div>This list below contains the co-ownership homes currently for sale. </div>

<ListingResults {listingsWithMeta} />
