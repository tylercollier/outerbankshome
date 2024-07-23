import nodemailer from 'nodemailer';
import { render } from 'svelte-email';

export async function sendEmail({ from, to, subject, template, props }) {
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
		template,
		props,
	});
	const emailText = render({
		template,
		props,
		options: {
			plainText: true,
		},
	});
	await transporter.sendMail({
		from,
		to,
		subject,
		html: emailHtml,
		text: emailText,
	});
}
