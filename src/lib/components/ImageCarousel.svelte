<script>
	import BiggerPicture from 'bigger-picture/svelte';
	import { onMount } from 'svelte';
	import 'bigger-picture/css';

	export let images;

	let biggerPicture;

	onMount(() => {
		biggerPicture = BiggerPicture({
			target: document.body,
		});
	});

	function showBiggerPicture() {
		// We make the list of items start with the same image that's currently shown as the primary image.
		const currentImageIndex = images.findIndex(x => x.MediaURL === currentImage.MediaURL);
		const imagesStartingFromIndex = images.slice(currentImageIndex).concat(images.slice(0, currentImageIndex));
		const items = imagesStartingFromIndex.map(x => ({
			img: x.MediaURL,
		}));
		biggerPicture.open({
			items,
		});
	}

	let currentImage = images[0];
</script>

<div>
	{#if images.length}
		<a class="cursor-pointer" on:click={showBiggerPicture}>
			<img class="w-[500px]" src={currentImage.MediaURL} title="Primary image for listing; click to enlarge" alt="alt" />
		</a>
		<div class="flex flex-wrap items-center w-[500px]">
			{#each images as image}
				<a class="cursor-pointer mr-1" on:click={() => currentImage = image}>
					<img class="w-[96px]" src={image.MediaURL} />
				</a>
			{/each}
		</div>
	{:else}
		There are no images to display for this listing
	{/if}
</div>
