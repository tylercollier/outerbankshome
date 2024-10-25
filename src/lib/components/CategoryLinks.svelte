<script>
	import { allowedCategories, getCategoryName } from '$lib/category';
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';
	import { getAreaNameFromParam } from '$lib/area';
	import { page } from '$app/stores';

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

<div class="flex flex-wrap gap-2 md:gap-4 mt-8 mb-8">
	{#each categoryLinks as categoryLink}
		{@const isActiveLink = decodeURIComponent($page.url.pathname) === categoryLink.href}
		<a href={categoryLink.href}
			 class="text-inherit no-underline font-bold px-3 md:px-5 py-2 md:py-3 hover:bg-obxorange text-darkblue hover:text-white"
			 class:bg-slate-300={!isActiveLink}
			 class:bg-obxorange={isActiveLink}
		>{categoryLink.label}</a>
	{/each}
</div>
