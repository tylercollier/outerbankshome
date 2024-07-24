import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// To use process.env from .env file, I got this from https://stackoverflow.com/a/66389044/135101
	// By not using the 3rd argument to loadEnv(), the .env values must be prefixed with VITE_
	const loadedEnv = loadEnv(mode, process.cwd());
	process.env = { ...process.env, ...loadedEnv };
	return {
		plugins: [sveltekit()],
		server: {
			host: process.env.VITE_HOST,
			port: parseInt(process.env.VITE_PORT),
			strictPort: true,
		},
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
		},
	};
});
