<script>
	import footerImage from '$lib/images/footer.jpg';
	import { officeLocalPhoneNumber, officeTollFreePhoneNumber } from '$lib/meta';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import footerLogo1 from '$lib/images/logo-eho.gif';
	import footerLogo2 from '$lib/images/logo-obx-chamber.png';
	import footerLogo3 from '$lib/images/logo-bbb.png';
	import footerLogo4 from '$lib/images/logo-mls.png';
	import footerLogo5 from '$lib/images/logo-obx-association-of-realtors.png';
	import footerLogo6 from '$lib/images/logo-currituck-chamber.png';
	import footerLogo7 from '$lib/images/logo-nc-association-of-realtors.png';
</script>


<footer>

	<div class="flex flex-row justify-center m-0 pt-8 border-2 border-solid border-t-darkblue border-b-0 border-l-0 border-r-0">
		<div class="flex flex-wrap items-center gap-8 p-4">
			<div><img src={footerLogo1} /></div>
			<div><img src={footerLogo2} /></div>
			<div><img src={footerLogo3} /></div>
			<div><img src={footerLogo4} /></div>
			<div><img src={footerLogo5} /></div>
			<div><img src={footerLogo6} /></div>
			<div><img src={footerLogo7} /></div>
		</div>
	</div>

	<div class="bg-darkblue text-white border">
		<div class="flex flex-wrap justify-center items-center gap-4 pt-8 px-4">
			<div>
				<LinkButton>Search Listings</LinkButton>
			</div>
			<div>
				Shore Realty of the Outer Banks Inc.<br />
				Locally Owned & Operated
			</div>
		</div>
		<p align="center">
			<a href="tel://{officeLocalPhoneNumber}" class="pr-4 text-3xl no-underline">{officeLocalPhoneNumber}</a> or
			<a href="tel://{officeTollFreePhoneNumber}" class="pl-4 text-3xl no-underline">{officeTollFreePhoneNumber}</a><br />
		</p>
		<div class="footernav flex flex-wrap justify-center items-center gap-6 p-4">
			<div><a href="/about-us.html" title="About us">About Us</a></div>
			<div><a href="/testimonials.html" title="Testimonials &amp; Reviews">Testimonials &amp; Reviews</a></div>
			<div><a href="/privacy-policy.html" title="Privacy Policy">Privacy Policy</a></div>
			<div><a href="/site-map.asp">Site Map</a></div>
			<div><a href="mailto:agent@outerbankshome.com">Contact Us</a></div>
		</div>
		<p class="bg-darkblue-50 text-center w-full p-4 mb-0">©1995-2024 Shore Realty OBX Inc.</p>
	</div>
</footer>

<style>
	.footernav a {
		@apply text-white;
		text-decoration: none;
		text-transform: uppercase;
	}
</style>