<script>
	import { makeLink } from '$lib/nav';
	import headerImage from '$lib/images/logo.jpg';
</script>

<header>
	<div class="relative">
		<a href="/">
			<img src={headerImage} class="w-full max-w-[800px]" />
		</a>
		<div class="absolute bottom-1 -z-10 bg-[#041c48] w-full h-[42px]"></div>
	</div>
	<div class="bg-headerorange p-2 -mt-1" style="border-bottom: 2px black solid;">
		<a href={makeLink('corolla/')} title="Corolla Home Sales">Corolla</a>
		|
		<a href={makeLink('duck/')} title="Duck Home Sales">Duck</a>
		|
		<a href={makeLink('southern-shores/')} title="Southern Shores Home Sales">Southern Shores</a>
		|
		<a href={makeLink('KittyHawk/')} title="Kitty Hawk Home Sales">Kitty Hawk</a>
		|
		<a href={makeLink('KillDevilHills/')} title="Kill Devil Hills Home Sales">Kill Devil Hills</a>
		|
		<a href={makeLink('colington/')} title="Colington Home Sales">Colington</a>
		|
		<a href={makeLink('nags head/')} title="Nags Head Home Sales">Nags Head</a>
		|
		<a href={makeLink('manteo/')} title="Manteo Home Sales">Manteo</a>
		|
		<a href={makeLink('hatteras-island/')} title="Hatteras Island Home Sales">Hatteras</a>
		|
		<a href={makeLink('sellers/')} title="Sellers">Sellers</a>
		|
		<a href={makeLink('buyers/')} title="Buyers">Buyers</a>
	</div>
</header>
