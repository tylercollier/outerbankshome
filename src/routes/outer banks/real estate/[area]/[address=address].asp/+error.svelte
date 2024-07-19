<script>
	import { page } from '$app/stores';
	import { getMlsIdFromRoute } from '$lib/address';
	const mlsId = getMlsIdFromRoute($page.params.address);
</script>

<main>
	<h1>Not found</h1>

	<div>There is no listing with ID: {mlsId}</div>
</main>
