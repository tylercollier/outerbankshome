<script>
	import ListingResult from '$lib/components/ListingResult.svelte';

	export let listings;
	export let urlInfix = '';
</script>

{#each listings as listing, i}
	<ListingResult {listing} {urlInfix} />
	{#if i < listings.length - 1}
	{/if}
{/each}
