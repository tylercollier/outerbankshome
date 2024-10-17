<script>
	import ListingResults from '$lib/components/ListingResults.svelte';

	export let listings;
	export let areaParam;
</script>

{#if !listings.length}
	<div>Unfortunately there are no listings at this time</div>
{:else}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<ListingResults {listings} urlInfix={areaParam} />
	</div>
{/if}
