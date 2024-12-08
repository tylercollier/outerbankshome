<script>
	import ListingResult from '$lib/components/ListingResult.svelte';
	import axios from 'axios';
	import Button from '$lib/components/Button.svelte';

	export let listingsWithMeta;
	export let urlInfix = '';

	const { listings: initialListings, listingKeys } = listingsWithMeta;
	let listingsToShow = initialListings;
	let isLoading = false;
	let numAttemptedToLoadSoFar = listingsToShow.length;

	$: showLoadMore = numAttemptedToLoadSoFar < listingKeys.length;

	async function loadMore() {
		isLoading = true;
		const keysToFetch = listingKeys.slice(numAttemptedToLoadSoFar, numAttemptedToLoadSoFar + initialListings.length);
		const results = await axios({
				url: '/api/listings',
				params: {
					keys: keysToFetch,
				},
			})
				.then(res => res.data)
				.finally(() => isLoading = false)
		;
		listingsToShow = listingsToShow.concat(results.listings);
		numAttemptedToLoadSoFar += keysToFetch.length;
	}
</script>

{#if !listingsToShow.length}
	<div>Unfortunately there are no listings at this time</div>
{:else}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each listingsToShow as listing}
			<ListingResult {listing} {urlInfix} />
		{/each}
	</div>
	<div class:hidden={!showLoadMore} class="mt-8">
		<Button on:click={loadMore} disabled={isLoading}>
			{isLoading ? 'Loading...' : 'Load more'}
		</Button>
	</div>
{/if}
