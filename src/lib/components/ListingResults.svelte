<script>
	import ListingResult from './ListingResult.svelte';

	export let listings;
	export let urlInfix = '';
</script>

{#each listings as listing}
	<ListingResult listing={listing} urlInfix={urlInfix} />
	<hr/>
{/each}
