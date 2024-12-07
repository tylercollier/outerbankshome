<script>
	export let disabled = false;
</script>

<button
	{...$$props}
	class="bg-obxorange text-white px-8 py-3 no-underline border-none cursor-pointer"
	class:opacity-50={disabled}
	on:click
>
	<slot />
</button>
