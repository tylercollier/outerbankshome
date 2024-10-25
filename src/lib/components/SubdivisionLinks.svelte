<script>
	import { getAreaNameFromParam } from '$lib/area';
	import { allowedSubdivisions } from '$lib/subdivision';
	import { allowedSubareas } from '$lib/subarea';
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';

	export let areaParam;

	function makeLink(sub) {
		return {
			label: sub.displayName,
			href: urljoin(basePath, areaParam, sub.slug + '.asp'),
		};
	}

	$: areaName = getAreaNameFromParam(areaParam);
	$: subdivisionLinks = allowedSubdivisions[areaParam].map(makeLink)
		.concat(allowedSubareas[areaParam] ? allowedSubareas[areaParam].map(makeLink) : []);
</script>

{#if subdivisionLinks.length}
<div class="bg-darkblue px-8 py-2 mt-10 mb-0 text-white">	
	<h2>{areaName} Subdivisions</h2>
</div>
<div class="bg-slate-300 grid grid-cols-2 md:grid-cols-3 p-8">
	{#each subdivisionLinks as subdivisionLink}
			<a href={subdivisionLink.href} class="pb-2">{subdivisionLink.label}</a>
	{/each}
</div>
{/if}
