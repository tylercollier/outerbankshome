import { fail } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { sendEmail } from '$lib/server/email';
import { verify } from '$lib/server/captcha';
import Agent from '$lib/emails/contact_us/Agent.svelte';
import Customer from '$lib/emails/contact_us/Customer.svelte';
import { shouldUse } from '$lib/captcha';

export const actions = {
	default: async event => {
		const formData = await event.request.formData();

		const schema = zfd.formData({
			first_name: zfd.text(),
			last_name: zfd.text(),
			email: zfd.text(z.string().email()),
			phone: zfd.text(z.string().optional()),
			comments: zfd.text(z.string().optional()),
			area: zfd.repeatable(),
			property_type: zfd.repeatable(),
			level_of_interest: zfd.repeatable(),
			price_range: zfd.text(),
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
			subject: `Contact Us form submission from ${import.meta.env.VITE_DOMAIN}`,
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
