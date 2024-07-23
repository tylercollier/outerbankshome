import { fail } from '@sveltejs/kit';
import axios from 'axios';

export async function verify(gRecaptchaResponse) {
	let captchaApiResponse;
	try {
		const dataString = `secret=${import.meta.env.VITE_GOOGLE_RECAPTCHA_SECRET_KEY}&response=${gRecaptchaResponse}`;
		captchaApiResponse = await axios({
			method: 'POST',
			url: 'https://www.google.com/recaptcha/api/siteverify',
			data: dataString,
		}).then(res => res.data);
	} catch (e) {
		return {
			success: false,
			fn: () => fail(500, { message: 'Something went wrong with verifying the captcha' }),
		};
	}
	if (!captchaApiResponse.success) {
		let message = 'Captcha is invalid. Please try again.';
		if (captchaApiResponse['error-codes']) {
			message += ' ' + captchaApiResponse['error-codes'].join(', ');
		}
		return {
			success: false,
			fn: () =>
				fail(400, {
					message,
				}),
		};
	}
	return {
		success: true,
	};
}
