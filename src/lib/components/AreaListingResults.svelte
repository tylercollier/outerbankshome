<script>
	import ListingResults from '$lib/components/ListingResults.svelte';

	export let listingsWithMeta;
	export let areaParam;

</script>

<ListingResults {listingsWithMeta} urlInfix={areaParam} />
