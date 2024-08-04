<script>
	export let printHref;
	export let moreInfoHref;
	export let className = '';
	export { className as class };
</script>

<div class="flex flex-wrap gap-2 {className}">
	<a class="text-black no-underline font-bold" href={printHref}>
		<div class="inline-block bg-headerorange px-10 py-1 rounded-md shadow-sm shadow-black">
			Printable Version
		</div>
	</a>
	<a class="text-black no-underline font-bold" href={moreInfoHref}>
		<div class="inline-block bg-headerorange px-10 py-1 rounded-md shadow-sm shadow-black">
			More Info
		</div>
	</a>
	<a class="text-black no-underline font-bold" href="/just-listed.html">
		<div class="inline-block bg-headerorange px-10 py-1 rounded-md shadow-sm shadow-black">
			Email Updates
		</div>
	</a>
</div>
