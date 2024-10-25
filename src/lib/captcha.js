export function shouldUse() {
	return import.meta.env.VITE_USE_CAPTCHA === 'yes';
}
