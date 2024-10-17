<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="mycontainer">
	<Header />

	<Nav />

	<main class="relative container mx-auto mb-16 p-8">
		<slot />
	</main>

	<Footer />
</div>
