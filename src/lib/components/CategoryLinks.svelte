<script>
	import { allowedCategories, getCategoryName } from '$lib/category';
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';

	export let areaParam;
	export let displayName;

	$: categoryLinks = allowedCategories[areaParam].map(slug => {
		const categoryName = getCategoryName(slug);
		return {
			label: `${displayName} ${categoryName}`,
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
