import nodemailer from 'nodemailer';
import { render } from 'svelte-email';

export async function sendEmail({ to, subject, template, props }) {
	let transportOptions = {
		host: import.meta.env.VITE_SMTP_HOST,
		port: parseInt(import.meta.env.VITE_SMTP_PORT, 10),
		secure: false,
		auth: {
			user: import.meta.env.VITE_SMTP_USERNAME,
			pass: import.meta.env.VITE_SMTP_PASSWORD,
		},
	};
	if (import.meta.env.VITE_USE_SENDMAIL === 'yes') {
		transportOptions = { sendmail: true };
	}
	const transporter = nodemailer.createTransport(transportOptions);
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
	let from = import.meta.env.VITE_FROM_EMAIL_ADDRESS;
	if (import.meta.env.VITE_FROM_EMAIL_NAME) {
		from = `${import.meta.env.VITE_FROM_EMAIL_NAME} <${import.meta.env.VITE_FROM_EMAIL_ADDRESS}>`;
	}
	await transporter.sendMail({
		from,
		to,
		subject,
		html: emailHtml,
		text: emailText,
	});
}
