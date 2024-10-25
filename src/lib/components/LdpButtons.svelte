<script>
	export let printHref;
	export let moreInfoHref;
	export let className = '';
	export { className as class };
</script>

<div class="flex gap-2 items-stretch text-center {className}">
	<a class="bg-obxorange text-white px-8 py-3 no-underline" href={moreInfoHref}>More Info</a>
	<a class="bg-obxorange text-white px-8 py-3 no-underline" href={printHref}>Print</a>
	<a class="bg-obxorange text-white px-8 py-3 no-underline" href="/just-listed.html">Email Updates</a>
</div>
