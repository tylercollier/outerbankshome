<script>
	import { Container, Preview, Html } from 'svelte-email';
	import Text from '$lib/emails/components/Text.svelte';
	import { getAreaNameFromParam } from '$lib/area';

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
<Preview preview="You contacted us using the Just Listed form on {import.meta.env.VITE_DOMAIN}" />

<Text>You contacted us using the Just Listed form on {import.meta.env.VITE_DOMAIN}.</Text>

<Text>Here's the information you submitted. We'll respond to you as quickly as we can.</Text>

<Container>
	<Text>First name: {first_name}</Text>
	<Text>Last name: {last_name}</Text>
	<Text>Email: {email}</Text>
	<Text>Phone: {phone}</Text>
	<Text>Price range: {price_range}</Text>
	<Text>Areas: {area.map(getAreaNameFromParam).join(', ')}</Text>
	<Text>Property types: {property_type.join(', ')}</Text>
	<Text>Level of interest: {level_of_interest.join(', ')}</Text>
	<Text>Comments: {comments}</Text>
</Container>
</Html>
