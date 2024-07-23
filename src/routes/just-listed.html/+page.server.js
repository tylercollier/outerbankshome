import { fail } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { sendEmail } from '$lib/server/email';
import { verify } from '$lib/server/captcha';
import Agent from '$lib/emails/just_listed/Agent.svelte';
import Customer from '$lib/emails/just_listed/Customer.svelte';

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

		const gRecaptchaResponse = formData.get('g-recaptcha-response');
		const verifiedResponse = await verify(gRecaptchaResponse);
		if (!verifiedResponse.success) {
			return verifiedResponse.fn();
		}

		await sendEmail({
			from: import.meta.env.VITE_FROM_EMAIL,
			to: import.meta.env.VITE_FROM_EMAIL,
			subject: `Just Listed form submission from ${import.meta.env.VITE_DOMAIN}`,
			template: Agent,
			props: result.data,
		});
		await sendEmail({
			from: import.meta.env.VITE_FROM_EMAIL,
			to: result.data.email,
			subject: `We received your Just Listed form submission on ${import.meta.env.VITE_DOMAIN}`,
			template: Customer,
			props: result.data,
		});

		return {
			success: true,
		};
	},
};
