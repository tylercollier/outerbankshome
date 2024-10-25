<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="mycontainer">
	<Header />

	<Nav />

	<main class="relative container mx-auto mb-16 p-2 md:p-8">
		<slot />
	</main>

	<Footer />

	<div class="md:hidden w-full p-4 bg-white p-3 text-center absolute bottom-0 text-2xl font-bold sticky">
		<a href="tel:8006471868" class="no-underline"><span class="text-obxorange">Call Agent:</span> <span class="text-black">(800)647-1868</span></a>
	</div>
</div>
