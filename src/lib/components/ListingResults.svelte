<script>
	import ListingResult from './ListingResult.svelte';

	export let listings;
</script>

{#each listings as listing}
	<ListingResult listing={listing} />
	<hr/>
{/each}
