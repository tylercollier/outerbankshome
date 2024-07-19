<script>
	import { allowedCategories, getAreaNameFromParam } from '$lib/area';
	import { getCategoryName } from '$lib/area';
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';

	export let area;

	$: areaName = getAreaNameFromParam(area);
	$: categoryLinks = allowedCategories[area].map((slug) => {
		const categoryName = getCategoryName(slug);
		return {
			label: `${areaName} ${categoryName}`,
			href: urljoin(basePath, area, slug, '/'),
		};
	});
</script>

<div class="my-8">
	<ul class="list-none">
		{#each categoryLinks as categoryLink}
			<li class="mb-4">
				<a href={categoryLink.href}>{categoryLink.label}</a>
			</li>
		{/each}
	</ul>
</div>
