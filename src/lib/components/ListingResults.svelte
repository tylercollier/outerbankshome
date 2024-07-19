<script>
	import ListingResult from './ListingResult.svelte';

	export let listings;
	export let urlInfix = '';
</script>

{#each listings as listing, i}
	<ListingResult {listing} {urlInfix} />
	{#if i < listings.length - 1}
		<hr />
	{/if}
{/each}
