<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';
	import CategoryLinks from '$lib/components/CategoryLinks.svelte';
	import SubdivisionLinks from '$lib/components/SubdivisionLinks.svelte';

	export let areaParam;
	export let activeListings;
	export let soldListings;
</script>

<slot name="topProse" />

<CategoryLinks {areaParam} />

<AreaListingResults listings={activeListings} {areaParam} />

<div class="bg-darkblue px-8 py-2 mt-10 mb-4 text-white">
	<h1>Sold Recently</h1>
</div>

<AreaListingResults listings={soldListings} {areaParam} />

<slot name="bottomProse" />

<SubdivisionLinks {areaParam} />
