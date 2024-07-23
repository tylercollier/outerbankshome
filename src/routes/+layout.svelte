<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.scss';
	import { officeLocalPhoneNumber, officeTollFreePhoneNumber } from '$lib/meta';
</script>

<div class="mycontainer">
	<header>
		<div class="relative">
			<a href="/">
				<img
					src="https://www.outerbankshome.com/Shore%20Realty%20Outer%20Banks%20Real%20Estate%20Sales.jpg"
					class="w-full max-w-[800px]"
				/>
			</a>
			<div class="absolute bottom-1 -z-10 bg-[#041c48] w-full h-[42px]"></div>
		</div>
		<div class="bg-[#FF7E40] p-2 -mt-1" style="border-bottom: 2px black solid;">
			<a href="/outer banks/real estate/corolla/" title="Corolla Home Sales">Corolla</a>
			|
			<a href="/outer banks/real estate/duck/" title="Duck Home Sales">Duck</a>
			|
			<a href="/outer banks/real estate/southern-shores/" title="Southern Shores Home Sales"
				>Southern Shores</a
			>
			|
			<a href="/outer banks/real estate/KittyHawk/" title="Kitty Hawk Home Sales">Kitty Hawk</a>
			|
			<a href="/outer banks/real estate/KillDevilHills/" title="Kill Devil Hills Home Sales"
				>Kill Devil Hills</a
			>
			|
			<a href="/outer banks/real estate/colington/" title="Colington Home Sales">Colington</a>
			|
			<a href="/outer banks/real estate/nags head/" title="Nags Head Home Sales">Nags Head</a>
			|
			<a href="/outer banks/real estate/manteo/" title="Manteo Home Sales">Manteo</a>
			|
			<a href="/hatteras-island.asp" title="Hatteras Island Home Sales">Hatteras</a>
			|
			<a href="/outer banks/real estate/sellers/" title="Sellers">Sellers</a>
			|
			<a href="/outer banks/real estate/buyers/" title="Buyers">Buyers</a>
		</div>
	</header>

	<Nav />

	<slot />

	<footer class="bg-lightorange border border-black border-solid">
		<p align="center">
			<b
				>Shore Realty of the Outer Banks Inc. <br />
				Locally Owned &amp; Operated<br />
				<a href="tel://{officeLocalPhoneNumber}">{officeLocalPhoneNumber}</a> OR
				<a href="tel://{officeTollFreePhoneNumber}">{officeTollFreePhoneNumber}</a><br />
			</b>
		</p>
		<p align="center">
			<a href="/about-us.html" title="About us">About Us</a> |
			<a href="/testimonials.html" title="Testimonials &amp; Reviews">Testimonials &amp; Reviews</a>
			| <a href="/privacy-policy.html" title="Privacy Policy">Privacy Policy</a> |
			<a href="/site-map.asp">Site Map</a>
			| <a href="https://blog.outerbankshome.com/" title="OBX Blog">OBX Blog</a> |
			<a href="mailto:agent@outerbankshome.com">Contact Us</a>
		</p>
		<p align="center">
			<img
				src="https://www.outerbankshome.com/footer.jpg"
				style="width:80%;"
				border="0"
				align="middle"
			/>
		</p>
		<p align="center">©1995-2024 Shore Realty OBX Inc.</p>
	</footer>
</div>

<style lang="scss">
</style>
