<script>
	import ListingResults from '$lib/components/ListingResults.svelte';

	export let data;
	$: ({ listingsWithMeta } = data);
</script>

<svelte:head>
	<title>
		Outer Banks (OBX) real estate sales and Outer Banks homes and beach houses for sale.
	</title>
</svelte:head>

<h2>Helping People Buy And Sell Homes on the Outer Banks</h2>
<p class="pb-4">
	<a href="/outer banks/real estate/buyers/buyer-agency.asp" title="Buyer agency">Do Not Sign an Exclusive Buyer Agency Agreement</a>  There is no Law that says you have to sign an Exclusive Buyer Agency Agreement before an agent can help you with buying a home. A Non-Exclusive Agency Agreement works and does not force unwarranted obligations on you.
</p>

<ListingResults {listingsWithMeta} />

<!-- Begin blue search listings row/box -->
<div class="bg-darkblue p-10 text-center my-8">
	<button class="px-10 py-3 bg-headerorange border-0 text-white text-2xl">Search Listings</button>
</div>
<!-- End blue search listings row/box -->
