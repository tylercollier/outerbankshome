<script>
	import { fly } from 'svelte/transition';
	import { makeLink } from '$lib/nav';
	import headerImage from '$lib/images/shore-realty-logo.gif';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import HamburgerMenu from '$lib/components/HamburgerMenu.svelte';

	let hamburgerMenuOpen = false;
</script>

<header class="sticky top-0 z-10 md:static md:z-0">
	<div class="relative">
		<a href="/">
			<img src={headerImage} class="w-full max-w-[800px]" alt="Shore Realty Logo" />
		</a>
		<div class="absolute top-4 right-0 flex items-center gap-5 mr-6 mb-10">
			<div class="text-xl md:text-2xl font-medium">800-647-1868</div>
			<div class="sm:hidden">
				<HamburgerMenu open={hamburgerMenuOpen} on:click={() => hamburgerMenuOpen = !hamburgerMenuOpen} />
			</div>
			<!-- On small screens, the section below should become a hamburger menu -->
			<div class="hidden md:flex">
				<LinkButton>Search Listings</LinkButton>
			</div>
			<div class="hidden lg:flex"><a href="/outer%20banks/real%20estate/sellers/" class="no-underline">Sellers</a></div>
			<div class="hidden lg:flex"><a href="/outer%20banks/real%20estate/buyers/" class="no-underline">Buyers</a></div>
			<div class="hidden lg:flex"><a href="/contact-info.asp" class="no-underline">Contact</a></div>
			<!-- End section -->
		</div>
		<div class="absolute bottom-1 -z-10 bg-[#041c48] w-full h-[43px]"></div>
	</div>
	<div
		class="topnav hidden sm:flex flex-wrap items-center justify-center gap-6 border-black border-solid border-x-0 border-t-0 border-b py-4 text-lg">
		<div><a href={makeLink('corolla/')} title="Corolla Home Sales">Corolla</a></div>
		<div><a href={makeLink('duck/')} title="Duck Home Sales">Duck</a></div>
		<div><a href={makeLink('southern-shores/')} title="Southern Shores Home Sales">Southern Shores</a></div>
		<div><a href={makeLink('KittyHawk/')} title="Kitty Hawk Home Sales">Kitty Hawk</a></div>
		<div><a href={makeLink('KillDevilHills/')} title="Kill Devil Hills Home Sales">Kill Devil Hills</a></div>
		<div><a href={makeLink('colington/')} title="Colington Home Sales">Colington</a></div>
		<div><a href={makeLink('nags head/')} title="Nags Head Home Sales">Nags Head</a></div>
		<div><a href={makeLink('manteo/')} title="Manteo Home Sales">Manteo</a></div>
		<div><a href={makeLink('hatteras island/')} title="Hatteras Island Home Sales">Hatteras</a></div>
		<div><a href="{makeLink('sellers/')}" title="Sellers">Sellers</a></div>
		<div><a href={makeLink('buyers/')} title="Buyers">Buyers</a></div>
	</div>
	<div class="scrolling-wrapper">
		<div><a href={makeLink('corolla/')} title="Corolla Home Sales">Corolla</a></div>
		<div><a href={makeLink('duck/')} title="Duck Home Sales">Duck</a></div>
		<div><a href={makeLink('southern-shores/')} title="Southern Shores Home Sales">Southern Shores</a></div>
		<div><a href={makeLink('KittyHawk/')} title="Kitty Hawk Home Sales">Kitty Hawk</a></div>
		<div><a href={makeLink('KillDevilHills/')} title="Kill Devil Hills Home Sales">Kill Devil Hills</a></div>
		<div><a href={makeLink('colington/')} title="Colington Home Sales">Colington</a></div>
		<div><a href={makeLink('nags head/')} title="Nags Head Home Sales">Nags Head</a></div>
		<div><a href={makeLink('manteo/')} title="Manteo Home Sales">Manteo</a></div>
		<div><a href={makeLink('hatteras island/')} title="Hatteras Island Home Sales">Hatteras</a></div>
		<div><a href="{makeLink('sellers/')}" title="Sellers">Sellers</a></div>
		<div><a href={makeLink('buyers/')} title="Buyers">Buyers</a></div>
	</div>

	{#if hamburgerMenuOpen}
		<nav transition:fly={{ y: -200, duration: 400 }}>
			<LinkButton>Search Listings</LinkButton>
			<div><a href={makeLink('corolla/')} title="Corolla Home Sales">Corolla</a></div>
			<div><a href={makeLink('duck/')} title="Duck Home Sales">Duck</a></div>
			<div><a href={makeLink('southern-shores/')} title="Southern Shores Home Sales">Southern Shores</a></div>
			<div><a href={makeLink('KittyHawk/')} title="Kitty Hawk Home Sales">Kitty Hawk</a></div>
			<div><a href={makeLink('KillDevilHills/')} title="Kill Devil Hills Home Sales">Kill Devil Hills</a></div>
			<div><a href={makeLink('colington/')} title="Colington Home Sales">Colington</a></div>
			<div><a href={makeLink('nags head/')} title="Nags Head Home Sales">Nags Head</a></div>
			<div><a href={makeLink('manteo/')} title="Manteo Home Sales">Manteo</a></div>
			<div><a href={makeLink('hatteras island/')} title="Hatteras Island Home Sales">Hatteras</a></div>
			<div><a href="{makeLink('sellers/')}" title="Sellers">Sellers</a></div>
			<div><a href={makeLink('buyers/')} title="Buyers">Buyers</a></div>
		</nav>
	{/if}
</header>

<style lang="scss">

	.topnav a {
		@apply text-darkblue;
		text-decoration: none;
		font-weight: 600;
	}

	.topnav a:hover {
		@apply text-linkblue;
	}

	.scrolling-wrapper {
		background: white;
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		scrollbar-width: none;
		gap: 6px;
		margin-top: 0;
		padding: 10px 0 10px 10px;

		div {
			white-space: nowrap;
			border-radius: 20px;
			background-color: #ff7e40;
			@apply px-4 py-2;

			a {
				color: white;
				text-decoration: none;
			}
		}
	}

	@media screen and (width >= 640px) {
		.scrolling-wrapper {
			display: none;
		}
	}

	nav {
		position: absolute;
		top: 55px;
		right: 0;
		z-index: 100;
		width: 70%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		border: 1px solid #333333;
		gap: 0.5rem;
		@apply bg-white;

		div {
			padding: 2px;

			a {
				text-decoration: none;
				color: black;
			}
			a.hover {
				@apply text-obxorange;
			}
		}
	}
</style>
