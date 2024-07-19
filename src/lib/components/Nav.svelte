<script>
	import urljoin from 'url-join';
	import { basePath } from '$lib/nav';

	function makeLink(sub) {
		return urljoin(basePath, sub);
	}
</script>

<nav class="bg-[#ffcc99] border border-black border-solid pl-2 pr-4">
	<h4>Corolla</h4>
	<ul>
		<li><a href={makeLink('corolla/')}>Corolla Homes</a></li>
		<li><a href={makeLink('corolla/condos/')}>Corolla Condos</a></li>
		<li><a href={makeLink('corolla/land/')}>Corolla Land</a></li>
		<li><a href={makeLink('corolla/water-front-homes/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Duck</h4>
	<ul>
		<li><a href={makeLink('duck/')}>Duck Homes</a></li>
		<li><a href={makeLink('duck/condos/')}>Duck Condos</a></li>
		<li><a href={makeLink('duck/land/')}>Duck Land</a></li>
		<li><a href={makeLink('duck/water-front-homes/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Southern Shores</h4>
	<ul>
		<li><a href={makeLink('southern-shores/')}>Southern Shores Homes</a></li>
		<li><a href={makeLink('southern-shores/water-front-homes/')}>Waterfront Homes</a></li>
		<li><a href={makeLink('southern-shores/land/')}>Land</a></li>
	</ul>
	<h4>Kitty Hawk</h4>
	<ul>
		<li><a href={makeLink('KittyHawk/')}>Kitty Hawk Homes</a></li>
		<li><a href={makeLink('KittyHawk/condos/')}>Kitty Hawk Condos</a></li>
		<li><a href={makeLink('KittyHawk/land/')}>Kitty Hawk Land</a></li>
		<li><a href={makeLink('KittyHawk/waterfront-homes/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Kill Devil Hills</h4>
	<ul>
		<li><a href={makeLink('KillDevilHills/')}>Homes</a></li>
		<li><a href={makeLink('KillDevilHills/condos/')}>Condos</a></li>
		<li><a href={makeLink('KillDevilHills/land/')}>Land</a></li>
		<li><a href={makeLink('KillDevilHills/waterfront-homes/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Nags Head</h4>
	<ul>
		<li><a href={makeLink('nags head/')}>Nags Head Homes</a></li>
		<li><a href={makeLink('nags head/land/')}>Lots/Land</a></li>
		<li><a href={makeLink('nags head/condos/')}>Condos</a></li>
		<li><a href={makeLink('nags head/waterfront-homes/')}>Waterfront Homes</a></li>
	</ul>
</nav>

<style lang="scss">
	ul {
		list-style: none;

		li {
			@apply -ml-6;
			@apply mb-4;
		}
	}
</style>
