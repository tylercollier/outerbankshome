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
<p class="pb-4">
	<a href="/outer banks/real estate/buyers/buyer-agency.asp" title="Buyer agency">Do Not Sign an Exclusive Buyer Agency Agreement</a>  There is no Law that says you have to sign an Exclusive Buyer Agency Agreement before an agent can help you with buying a home. A Non-Exclusive Agency Agreement works and does not force unwarranted obligations on you.
</p>

<!-- Begin listing grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	<ListingResults {listings} />
</div>
<!-- End listing grid -->

<!-- Begin pagination -->
<p class="text-center py-8 text-[#ff0000]">PAGINATION NEEDS TO GO HERE STYLED LIKE THE SAMPLE BELOW</p>
<div class="flex flex-row justify-center gap-3">
	<div class=" content-center">&lt</div>
	<div class="border border-solid border-slate-300 px-3 py-2 content-center"><a href="">1</a></div>
	<div class="border border-solid border-slate-300 px-3 py-2 content-center"><a href="">2</a></div>
	<div class="border border-solid border-slate-300 px-3 py-2 content-center"><a href="">3</a></div>
	<div class=" content-center">...</div>
	<div class="border border-solid border-slate-300 px-3 py-2 content-center"><a href="">8</a></div>
	<div class=" content-center">&gt</div>
</div>
<!-- End pagination -->

<!-- Begin blue search listings row/box -->
<div class="bg-darkblue p-10 text-center my-8">
	<button class="px-10 py-3 bg-headerorange border-0 text-white text-2xl">Search Listings</button>
</div>
<!-- End blue search listings row/box -->

<p>This is where I add content</p>