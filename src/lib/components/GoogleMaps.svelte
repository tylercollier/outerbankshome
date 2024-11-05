<script>
	import * as pkg from '@googlemaps/js-api-loader';
	const { Loader } = pkg;
	import { onMount } from 'svelte';
	import iconPath from '$lib/images/house-marker-icon.png';

	export let lat = 0;
	export let lng = 0;
	export let title = '';

	let element;

	onMount(() => {
		loadGoogleMapsStuff();
	});

	async function loadGoogleMapsStuff() {
		if (!lat) {
			return;
		}

		const loader = new Loader({
			apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
			libraries: ['maps'],
		});
		let { Map } = await loader.importLibrary('maps');
		const { AdvancedMarkerElement } = await loader.importLibrary('marker');
		const {InfoWindow} = await loader.importLibrary("maps")
		const houseIconFromPng = document.createElement('img');
		houseIconFromPng.src = iconPath;
		houseIconFromPng.width = 50;

		const map = new Map(element, {
			center: { lat, lng },
			zoom: 18,
			mapId: 'mapid',
		});

		const marker = new AdvancedMarkerElement({
			position: { lat, lng },
			map,
			content: houseIconFromPng,
			title,
		});

		const info = new InfoWindow({
			content: title,
		});
		info.open({
			map,
			anchor: marker,
		})
	}
</script>

<div class="w-full h-[500px] sm:min-h-[250px]" bind:this={element} />
