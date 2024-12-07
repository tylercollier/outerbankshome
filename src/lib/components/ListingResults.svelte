<script>
	import ListingResult from '$lib/components/ListingResult.svelte';

	export let listings;
	export let urlInfix = '';
</script>

{#each listings as listing}
	<ListingResult {listing} {urlInfix} />
{/each}
