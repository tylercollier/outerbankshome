<script>
	import { Container, Preview, Html } from 'svelte-email';
	import Text from '$lib/emails/components/Text.svelte';

	export let first_name;
	export let last_name;
	export let email;
	export let phone;
	export let level_of_interest;
	export let mls_id;
</script>

<Html lang="en">
	<Preview preview="You contacted us using the Listing Details Page form on {import.meta.env.VITE_DOMAIN}" />

	<Text>You contacted us using the Listing Details Page form on {import.meta.env.VITE_DOMAIN}.</Text>

	<Text>Here's the information you submitted. We'll respond to you as quickly as we can.</Text>

	<Container>
		<Text>First name: {first_name}</Text>
		<Text>Last name: {last_name}</Text>
		<Text>Email: {email}</Text>
		<Text>Phone: {phone}</Text>
		<Text>Level of interest: {level_of_interest.join(', ')}</Text>
		<Text>MLS ID: {mls_id}</Text>
	</Container>
</Html>
