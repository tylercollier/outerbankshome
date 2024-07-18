<script>
	import AreaListingResults from '$lib/components/AreaListingResults.svelte';
	import CategoryLinks from '$lib/components/CategoryLinks.svelte';
	import SubdivisionLinks from '$lib/components/SubdivisionLinks.svelte';

	export let area;
	export let listings;
</script>

<CategoryLinks area={area} />

<AreaListingResults listings={listings} area={area} />

<hr class="orange" />

<SubdivisionLinks area={area} />
