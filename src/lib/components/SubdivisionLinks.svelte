<script>
	import { allowedSubdivisions } from '$lib/area';
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';

	export let areaParam;
	export let displayName;

	$: subdivisionLinks = allowedSubdivisions[areaParam].map(subdivision => {
		return {
			label: subdivision.name,
			href: urljoin(basePath, areaParam, subdivision.slug + '.asp'),
		};
	});
</script>

{#if subdivisionLinks.length}
	<h2>{displayName} Subdivisions</h2>

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
