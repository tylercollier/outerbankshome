<script>
	import urljoin from 'url-join';

	const basePath = '/outer banks/real estate';

	function makeLink(sub) {
		return urljoin(basePath, sub);
	}
</script>

<nav>
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
</nav>