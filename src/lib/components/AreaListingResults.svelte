<script>
	import ListingResults from '$lib/components/ListingResults.svelte';

	export let listings;
	export let areaParam;
</script>

{#if !listings.length}
	<div>Unfortunately there are no listings at this time</div>
{:else}
	<ListingResults {listings} urlInfix={areaParam} />
{/if}
