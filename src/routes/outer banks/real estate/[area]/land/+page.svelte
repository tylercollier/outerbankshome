<script>
	import ListingResults from '$lib/components/ListingResults.svelte';
	export let data;
	const { area, listings } = data;
</script>

<svelte:head>
	<title></title>
</svelte:head>

<main>
	<h1>{area} Lots & Land For Sale</h1>

	{#if !listings.length}
		<div>Unfortunately there are no listings at this time</div>
	{:else}
		<ListingResults listings={listings} />
	{/if}
</main>
