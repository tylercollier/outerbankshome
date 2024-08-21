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

<hr class="orange" />

<h1>Sold Recently</h1>

<AreaListingResults listings={soldListings} {areaParam} />

<hr class="orange" />

<slot name="bottomProse" />

<SubdivisionLinks {areaParam} />
