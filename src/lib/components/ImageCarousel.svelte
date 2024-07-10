<script>
	export let images;
</script>

<div>
	{#if images.length}
		<img class="thumbnail" src={images[0].MediaURL} title="Primary image for listing" alt="alt" />
	{/if}
	<div>There are {images.length} images</div>
</div>

<style lang="scss">
	img.thumbnail {
		width: 400px;
	}
</style>