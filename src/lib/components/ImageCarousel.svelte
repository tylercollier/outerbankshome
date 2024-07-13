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


	let currentImageIndex = 0;
	$: currentImage = null;
	$: if (images.length) {
		currentImage = images[currentImageIndex];
	}
	function prevImage() {
		if (currentImageIndex === 0) {
			currentImageIndex = images.length - 1;
		} else {
			currentImageIndex--;
		}
		emblaApi.scrollTo(currentImageIndex);
	}
	function nextImage() {
		if (currentImageIndex === images.length - 1) {
			currentImageIndex = 0;
		} else {
			currentImageIndex++;
		}
		emblaApi.scrollTo(currentImageIndex);
	}
	function showBiggerPicture() {
		const items = images.map(x => ({ img: x.MediaURL }));
		biggerPicture.open({
			items,
			position: currentImageIndex,
			onUpdate(container, activeItem) {
				const index = images.findIndex(x => x.MediaURL === activeItem.img);
				if (index !== undefined) {
					currentImageIndex = index;
					emblaApi.scrollTo(currentImageIndex);
				}
			},
		});
	}
</script>

<div>
	{#if images.length}
		<div class="relative w-[500px]">
			<div class="absolute top-1 left-1 text-sm">{currentImageIndex + 1}/{images.length}</div>
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
					{#each images as image, i}
						<a class="cursor-pointer embla__slide" on:click={() => currentImageIndex = i}>
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
