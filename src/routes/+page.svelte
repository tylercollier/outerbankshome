<script>
import ListingResults from '$lib/components/ListingResults.svelte';

export let data;
$: ({ listings } = data);
</script>

<svelte:head>
	<title>
		Outer Banks (OBX) real estate sales and Outer Banks homes and beach houses for sale.
	</title>
</svelte:head>

<h2>Helping People Buy And Sell Homes on the Outer Banks</h2>

<ListingResults {listings} />
