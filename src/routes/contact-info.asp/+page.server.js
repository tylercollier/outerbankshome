import { fail } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { sendEmail } from '$lib/email';
import Agent from '$lib/emails/contact_us/Agent.svelte';
import Customer from '$lib/emails/contact_us/Customer.svelte';
import axios from 'axios';

export const actions = {
	default: async (event) => {
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
		let captchaApiResponse;
		try {
			const dataString = `secret=${import.meta.env.VITE_GOOGLE_RECAPTCHA_SECRET_KEY}&response=${gRecaptchaResponse}`;
			captchaApiResponse = await axios({
				method: 'POST',
				url: 'https://www.google.com/recaptcha/api/siteverify',
				data: dataString,
			})
				.then(res => res.data)
			;
		} catch (e) {
			return fail(500, { message: 'Something went wrong with verifying the captcha' });
		}
		if (!captchaApiResponse.success) {
			let message = 'Captcha is invalid. Please try again.'
			if (captchaApiResponse['error-codes']) {
				message += ' ' + captchaApiResponse['error-codes'].join(', ');
			}
			return fail(400, {
				message,
			});
		}

		await sendEmail({
			from: import.meta.env.VITE_FROM_EMAIL,
			to: import.meta.env.VITE_FROM_EMAIL,
			subject: `Contact Us form submission from ${import.meta.env.VITE_DOMAIN}`,
			template: Agent,
			props: result.data,
		});
		await sendEmail({
			from: import.meta.env.VITE_FROM_EMAIL,
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
