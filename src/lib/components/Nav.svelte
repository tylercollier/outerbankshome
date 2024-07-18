<script>
	import urljoin from 'url-join';

	const basePath = '/outer banks/real estate';

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
	<h4>Kitty Hawk</h4>
	<ul>
		<li><a href={makeLink('KittyHawk/waterfront-homes/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Kill Devil Hills</h4>
	<ul>
		<li><a href={makeLink('KillDevilHills/waterfront/')}>Waterfront Homes</a></li>
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