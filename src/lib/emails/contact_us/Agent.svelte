<script>
	import { Container, Preview, Html, Text } from 'svelte-email';
	import { getAreaNameFromParam } from '$lib/area.js';

	export let first_name;
	export let last_name;
	export let email;
	export let phone;
	export let comments;
	export let area;
	export let property_type;
	export let level_of_interest;
	export let price_range;
</script>

<Html lang="en">
	<style>
		body {
			font-family: sans-serif;
		}
	</style>

	<Preview>You were contacted by {first_name} {last_name} ({email}) using the Contact Us form on {import.meta.env.VITE_DOMAIN}</Preview>

	<Text>You were contacted by {first_name} {last_name} ({email}) using the Contact Us form on {import.meta.env.VITE_DOMAIN}</Text>

	<Container>
		<Text>First name: {first_name}</Text>
		<Text>Last name: {last_name}</Text>
		<Text>Email: {email}</Text>
		<Text>Phone: {phone}</Text>
		<Text>Comments: {comments}</Text>
		<Text>Areas: {area.map(getAreaNameFromParam).join(', ')}</Text>
		<Text>Property types: {property_type.join(', ')}</Text>
		<Text>Level of interest: {level_of_interest.join(', ')}</Text>
		<Text>Price range: {price_range}</Text>
	</Container>
</Html>
