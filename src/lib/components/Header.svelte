<script>
	import { makeLink } from '$lib/nav';
	import headerImage from '$lib/images/shore-realty-logo.gif';
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<header class="sticky top-0 z-10 md:static md:z-0">
	<div class="relative">
		<a href="/">
			<img src={headerImage} class="w-full max-w-[800px]" alt="Shore Realty Logo" />
		</a>
		<div class="absolute top-4 right-0 flex items-center gap-5 mr-6 mb-10">
			<div class="text-xl md:text-2xl font-medium">800-647-1868</div>
			<!-- On small screens, the section below should become a hamburger menu -->
			<div class="hidden md:flex"><LinkButton>Search Listings</LinkButton></div>
			<div class="hidden lg:flex"><a href="/outer%20banks/real%20estate/sellers/" class="no-underline">Sellers</a></div>
			<div class="hidden lg:flex"><a href="/outer%20banks/real%20estate/buyers/" class="no-underline">Buyers</a></div>
			<div class="hidden lg:flex"><a href="/contact-info.asp" class="no-underline">Contact</a></div>
			<div><!-- HAMBURGER MENU SHOULD GO HERE --></div>
			<!-- End section -->
		</div>
		<div class="absolute bottom-1 -z-10 bg-[#041c48] w-full h-[43px]"></div>
	</div>
	<!-- On medium and smaller screens, the section below should become a scrollie menu like in Google maps -->
	<div class="topnav hidden md:flex flex-wrap items-center justify-center gap-6 border-black border-solid border-x-0 border-t-0 border-b py-4 text-lg">
		<div><a href={makeLink('corolla/')} title="Corolla Home Sales">Corolla</a></div>
		<div><a href={makeLink('duck/')} title="Duck Home Sales">Duck</a></div>
		<div><a href={makeLink('southern-shores/')} title="Southern Shores Home Sales">Southern Shores</a></div>
		<div><a href={makeLink('KittyHawk/')} title="Kitty Hawk Home Sales">Kitty Hawk</a></div>
		<div><a href={makeLink('KillDevilHills/')} title="Kill Devil Hills Home Sales">Kill Devil Hills</a></div>
		<div><a href={makeLink('colington/')} title="Colington Home Sales">Colington</a></div>
		<div><a href={makeLink('nags head/')} title="Nags Head Home Sales">Nags Head</a></div>
		<div><a href={makeLink('manteo/')} title="Manteo Home Sales">Manteo</a></div>
		<div><a href={makeLink('hatteras-island/')} title="Hatteras Island Home Sales">Hatteras</a></div>
		<div><a href="{makeLink('sellers/')}" title="Sellers">Sellers</a></div>
		<div><a href={makeLink('buyers/')} title="Buyers">Buyers</a></div>
	</div>
	<!-- End section -->
</header>

<style>
	.topnav a {
		@apply text-darkblue;
		text-decoration: none;
		font-weight:600;
	}
	.topnav a:hover {
		@apply text-linkblue;
	}
</style>