<script>
	import footerImage from '$lib/images/footer.jpg';
	import { officeLocalPhoneNumber, officeTollFreePhoneNumber } from '$lib/meta';
</script>

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
		<img src={footerImage} style="width:80%;" border="0" align="middle" />
	</p>
	<p align="center">©1995-2024 Shore Realty OBX Inc.</p>
</footer>
