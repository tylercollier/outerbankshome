



// Reminder: this page exists for our convenience to send a test email. We could fill out our own
// contact-us form which doesn't take too long, but if there is a problem, filling it out multiple
// times is a pain. Because I hid this page behind a query string parameter having to be set, and
// there aren't any links to this page, I'm thinking it should be fine to leave it permanently.






import Agent from '$lib/emails/contact_us/Agent.svelte';
import { sendEmail } from '$lib/server/email';

export const load = async ({ url }) => {

	if (url.searchParams.get('test') === 'yes') {
		console.log('sending email');
		const data = {
			first_name: 'my first name',
			last_name: 'my last name',
			email: 'joe@example.com',
			phone: '987-654-3210',
			comments: 'here are my comments',
			area: [],
			property_type: [],
			level_of_interest: [],
			price_range: 'price range here',
		};

		await sendEmail({
			to: 'tylercollier+outerbankshome_test@gmail.com',
			subject: `Contact Us form submission from ${import.meta.env.VITE_DOMAIN}`,
			template: Agent,
			props: data,
		});
		console.log('sent email');
	} else {
		console.log('Did not try to send test email. Dont forget query string test=yes.');
	}
};
