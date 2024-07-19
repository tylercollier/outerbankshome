<script>
	import { page } from '$app/stores';
</script>

<main>
	{#if $page.status === 404}
		<h1>Not found</h1>
		<div>{$page.error.message}</div>
	{/if}
</main>
