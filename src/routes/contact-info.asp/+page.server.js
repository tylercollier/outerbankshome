import { fail } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import Agent from '$lib/emails/contact_us/Agent.svelte';
import { render } from 'svelte-email';

const zOptional = z.string().optional();

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		const schema = zfd.formData({
			first_name: zfd.text(),
			last_name: zfd.text(),
			email: zfd.text(z.string().email()),
			phone: zfd.text(zOptional),
			comments: zfd.text(zOptional),
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

		const transporter = nodemailer.createTransport({
			host: import.meta.env.VITE_SMTP_HOST,
			port: parseInt(import.meta.env.VITE_SMTP_PORT, 10),
			secure: false,
			auth: {
				user: import.meta.env.VITE_SMTP_USERNAME,
				pass: import.meta.env.VITE_SMTP_PASSWORD,
			},
		});
		const emailHtml = render({
			template: Agent,
			props: result.data,
		});
		const emailText = render({
			template: Agent,
			props: result.data,
			options: {
				plainText: true,
			},
		});
		const info = await transporter.sendMail({
			from: 'agent@outerbankshome.com',
			to: 'agent@outerbankshome.com',
			subject: 'Contact Us form on outerbankshome.com',
			html: emailHtml,
			text: emailText,
		});

		return {
			success: true,
		};
	},
};
