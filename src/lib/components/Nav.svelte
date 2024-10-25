<script>
	import { officeTollFreePhoneNumber } from '$lib/meta';
	import { makeLink, isPrintPage } from '$lib/nav';
	import { page } from '$app/stores';

	$: isPrint = isPrintPage($page);
</script>

<nav class="bg-lightorange hidden" class:hidden={isPrint}>
	<h3 class="bg-darkblue px-4 py-4 text-white text-xl mt-0">Buyer & Seller Tools</h3>
	<div class="pl-4">
		<p><a href="#" class="text-black no-underline text-l">Search OBX MLS</a></p>
		<p><a href="/just-listed.html" class="text-black no-underline">Just Listed Updates</a></p>
		<p><a href="#" class="text-black no-underline">Free Home Valuation</a></p>
		<p><a href="#" class="text-black no-underline">New Listings Notifier</a></p>
		<p><a href="/contact-info.asp" class="text-black no-underline">Contact us</a></p>
	</div>
	<h3 class="bg-darkblue px-4 py-4 text-white text-xl mt-0">Find a Property</h3>
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
	<h4>Martin's Point</h4>
	<ul>
		<li><a href={makeLink('martins point/')}>Martin's Point Homes</a></li>
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
		<li><a href={makeLink('KillDevilHills/waterfront/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Nags Head</h4>
	<ul>
		<li><a href={makeLink('nags head/')}>Nags Head Homes</a></li>
		<li><a href={makeLink('nags head/land/')}>Lots/Land</a></li>
		<li><a href={makeLink('nags head/condos/')}>Condos</a></li>
		<li><a href={makeLink('nags head/water-front-homes/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Manteo</h4>
	<ul>
		<li><a href={makeLink('manteo/')}>Manteo Homes</a></li>
		<li><a href={makeLink('manteo/condos/')}>Manteo Condos</a></li>
		<li><a href={makeLink('manteo/land/')}>Manteo Land</a></li>
	</ul>
	<h4>Colington</h4>
	<ul>
		<li><a href={makeLink('colington/')}>Colington Homes</a></li>
		<li><a href={makeLink('colington/colington-harbor/')}>Colington Harbor</a></li>
		<li><a href={makeLink('colington/waterfront-homes/')}>Waterfront Homes</a></li>
	</ul>
	<h4>Hatteras Island</h4>
	<ul>
		<li><a href={makeLink('avon/')}>Avon Homes</a></li>
		<li><a href={makeLink('buxton/')}>Buxton Homes</a></li>
		<li><a href={makeLink('frisco/')}>Frisco Homes</a></li>
		<li><a href={makeLink('hatteras island/')}>Hatteras Village Homes</a></li>
		<li><a href={makeLink('rodanthe/')}>Rodanthe Homes</a></li>
		<li><a href={makeLink('salvo/')}>Salvo Homes</a></li>
		<li><a href={makeLink('waves/')}>Waves Homes</a></li>
	</ul>
	<h4>Other</h4>
	<ul class="pb-10">
		<li><a href={makeLink('retirement-homes/')}>OBX Retirement Homes</a></li>
		<li><a href={makeLink('boat-slips/')}>OBX Boat Slips</a></li>
		<li><a href={makeLink('Commercial/')}>OBX Commercial Properties</a></li>
		<li><a href={makeLink('time-share/')}>OBX Co-Ownership Properties</a></li>
	</ul>
	<h4>Inner Banks</h4>
	<ul><li>
		<a href={makeLink('currituck/')}>Currituck</a>
	</li>
	</ul>
</nav>

<style lang="scss">
	ul {
		list-style: none;

		li {
			@apply -ml-6;
			@apply mb-4;
			@apply ml-2;
			@apply mr-4;
		}

			a {
				color:black;
				text-decoration: none;
				font-weight: normal;
			}
	}
	h4 {
		border-bottom: 4px solid #ff7e40;
		margin-left: 20px;
		font-size: 1.5em;
		font-weight: normal;
		padding-bottom: 5px;
		margin-bottom:0;
	}
</style>
