<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';
</script>

<div class="container">
	<header>
		<h1>Shore Realty</h1>
	</header>

	<Nav />

	<slot />

	<footer>
		Copyright 1998
	</footer>
</div>

<style lang="scss">

</style>
