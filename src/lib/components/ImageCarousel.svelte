<script>
	import BiggerPicture from 'bigger-picture/svelte';
	import { onMount } from 'svelte';
	import 'bigger-picture/css';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Fa from 'svelte-fa';
	import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

	export let images;

	let biggerPicture;
	let emblaApi;
	let emblaOptions = {
		dragFree: true,
		loop: true,
		slidesToScroll: 1,
	};

	function onEmblaInit(event) {
		emblaApi = event.detail;
	}

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
	function prevImage() {
		const currentImageIndex = images.findIndex(x => x.MediaURL === currentImage.MediaURL);
		if (currentImageIndex === 0) {
			currentImage = images[images.length - 1];
			emblaApi.scrollTo(images.length - 1);
		} else {
			currentImage = images[currentImageIndex - 1];
			emblaApi.scrollTo(currentImageIndex - 1);
		}
	}
	function nextImage() {

	}
</script>

<div>
	{#if images.length}
		<div class="relative w-[500px]">
			<div class="absolute top-1 left-1 text-sm">1/{images.length}</div>
			<div class="absolute inset-y-0 left-0 flex items-stretch">
				<button class="arrow" on:click={prevImage}>
					<Fa color="black" size="2x" icon={faCircleChevronLeft} />
				</button>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-stretch">
				<button class="arrow" on:click={nextImage}>
					<Fa color="black" size="2x" icon={faCircleChevronRight} />
				</button>
			</div>
			<a class="cursor-pointer" on:click={showBiggerPicture}>
				<img class="w-[500px]" src={currentImage.MediaURL} title="Primary image for listing; click to enlarge"
						 alt="alt" />
			</a>
		</div>
		<div class="w-[500px] flex">
			<button class="arrow" on:click={emblaApi.scrollPrev}>
				<Fa color="gray" size="lg" icon={faCircleChevronLeft} />
			</button>
			<div
				class="embla flex-1"
				use:emblaCarouselSvelte={{ options: emblaOptions }}
				on:emblaInit={onEmblaInit}
			>
				<div class="embla__container">
					{#each images as image}
						<a class="cursor-pointer embla__slide" on:click={() => currentImage = image}>
							<img class="max-w-[96px]" src={image.MediaURL} />
						</a>
					{/each}
				</div>
			</div>
			<button class="arrow" on:click={emblaApi.scrollNext}>
				<Fa color="gray" size="lg" icon={faCircleChevronRight} />
			</button>
		</div>
	{:else}
		There are no images to display for this listing
	{/if}
</div>

<style>
	.arrow {
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.embla {
		overflow: hidden;
	}

	.embla__container {
		display: flex;
		@apply items-center;
	}

	.embla__slide {
		flex: 0 0 100px;
		min-width: 0;
	}
</style>
