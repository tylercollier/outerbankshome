<script>
	import { allowedCategories, getCategoryName } from '$lib/category';
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';
	import { getAreaNameFromParam } from '$lib/area.js';

	export let areaParam;

	$: areaName = getAreaNameFromParam(areaParam);
	$: categoryLinks = allowedCategories[areaParam].map(slug => {
		const categoryName = getCategoryName(slug);
		return {
			label: `${areaName} ${categoryName}`,
			href: urljoin(basePath, areaParam, slug, '/'),
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
