<script>
	import { shouldUse } from '$lib/captcha';
</script>

{#if shouldUse()}
	<script
		src="https://www.google.com/recaptcha/api.js?render={import.meta.env
			.VITE_GOOGLE_RECAPTCHA_SITE_KEY}"
	>
	</script>
{/if}
