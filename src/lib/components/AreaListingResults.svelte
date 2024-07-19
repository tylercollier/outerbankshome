<script>
	import ListingResults from '$lib/components/ListingResults.svelte';

	export let listings;
	export let area;
</script>

{#if !listings.length}
	<div>Unfortunately there are no listings at this time</div>
{:else}
	<ListingResults {listings} urlInfix={area} />
{/if}
