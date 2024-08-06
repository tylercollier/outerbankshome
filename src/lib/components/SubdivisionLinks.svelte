<script>
	import { getAreaNameFromParam } from '$lib/area';
	import { allowedSubdivisions } from '$lib/subdivision';
	import { allowedSubareas } from '$lib/subarea';
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';

	export let areaParam;

	function makeLink(sub) {
		return {
			label: sub.name,
			href: urljoin(basePath, areaParam, sub.slug + '.asp'),
		};
	}

	$: areaName = getAreaNameFromParam(areaParam);
	$: subdivisionLinks = allowedSubdivisions[areaParam].map(makeLink)
		.concat(allowedSubareas[areaParam] ? allowedSubareas[areaParam].map(makeLink) : []);
</script>

{#if subdivisionLinks.length}
	<h2>{areaName} Subdivisions</h2>

	<div class="my-8">
		<ul class="list-none">
			{#each subdivisionLinks as subdivisionLink}
				<li class="mb-4">
					<a href={subdivisionLink.href}>{subdivisionLink.label}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
