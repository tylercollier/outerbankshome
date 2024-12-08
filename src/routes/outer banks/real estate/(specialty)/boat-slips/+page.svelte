<script>
	import ListingResults from '$lib/components/ListingResults.svelte';

	export let data;
	$: ({ listingsWithMeta } = data);
</script>

<svelte:head>
	<title>Outer Banks Boat Slips</title>
</svelte:head>

<h1>Outer Banks Boat Slips</h1>

<div>This list below contains the Boat Slips currently for sale at some of the area Marinas.</div>

<ListingResults {listingsWithMeta} />
