import { error, fail } from '@sveltejs/kit';
import { getListing } from '$lib/server/db';
import { getMlsIdFromRoute } from '$lib/address';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { shouldUse } from '$lib/captcha.js';
import { verify } from '$lib/server/captcha.js';
import { sendEmail } from '$lib/server/email.js';
import Agent from '$lib/emails/listing_details_page/Agent.svelte';
import Customer from '$lib/emails/listing_details_page/Customer.svelte';

export const load = async ({ params }) => {
	const mlsId = getMlsIdFromRoute(params.address);
	if (!mlsId) {
		error(404, 'Not found');
	}
	const listing = await getListing(mlsId);

	if (listing) {
		return { listing };
	}

	error(404, 'Not found');
};

export const actions = {
	default: async event => {
		const formData = await event.request.formData();

		const schema = zfd.formData({
			first_name: zfd.text(),
			last_name: zfd.text(),
			email: zfd.text(z.string().email()),
			phone: zfd.text(z.string().optional()),
			level_of_interest: zfd.repeatable(),
			mls_id: zfd.text(),
		});

		const result = schema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors,
			};
			return fail(400, data);
		}

		if (shouldUse()) {
			const gRecaptchaResponse = formData.get('g-recaptcha-response');
			const verifiedResponse = await verify(gRecaptchaResponse);
			if (!verifiedResponse.success) {
				return verifiedResponse.fail();
			}
		}

		await sendEmail({
			to: import.meta.env.VITE_FROM_EMAIL_ADDRESS,
			subject: `Listing Details Page form submission from ${import.meta.env.VITE_DOMAIN}`,
			template: Agent,
			props: result.data,
		});
		await sendEmail({
			to: result.data.email,
			subject: `Thank you for contacting us on ${import.meta.env.VITE_DOMAIN}`,
			template: Customer,
			props: result.data,
		});

		return {
			success: true,
		};
	},
};
