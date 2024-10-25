<script>
	export let label = '';
	export let value = null;
</script>

{#if value}
	<div class="pb-2">
		<span class="font-bold">{label}:</span>
		{value}
	</div>
{/if}
