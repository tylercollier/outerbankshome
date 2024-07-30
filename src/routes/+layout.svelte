<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
	console.log('data', data)
</script>

<div class="mycontainer">
	<Header />

	<Nav />

	<main class="container mx-auto">
		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
</style>
