<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';
	import CategoryLinks from '$lib/components/CategoryLinks.svelte';
	import SubdivisionLinks from '$lib/components/SubdivisionLinks.svelte';

	export let area;
	export let activeListings;
	export let soldListings;
</script>

<CategoryLinks {area} />

<AreaListingResults listings={activeListings} {area} />

<hr class="orange" />

<h1>{area} Sold Recently</h1>

<AreaListingResults listings={soldListings} {area} />

<hr class="orange" />

<SubdivisionLinks {area} />
