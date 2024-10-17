<script>
	export let printHref;
	export let moreInfoHref;
	export let className = '';
	export { className as class };
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<div class="flex flex-wrap gap-2 {className}">
	<a class="text-black no-underline font-bold" href={moreInfoHref}><LinkButton>More Info</LinkButton></a>
	<a class="text-black no-underline font-bold" href={printHref}><LinkButton>Print</LinkButton></a>
	<a class="text-black no-underline font-bold" href="/just-listed.html"><LinkButton>Email Updates</LinkButton></a>
</div>
