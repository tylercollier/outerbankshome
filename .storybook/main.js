const config = {
	async viteFinal(config, options, mode) {
		const { mergeConfig, loadEnv } = await import('vite');
		// To use process.env from .env file, I got this from https://stackoverflow.com/a/66389044/135101
		// By not using the 3rd argument to loadEnv(), the .env values must be prefixed with VITE_
		const loadedEnv = loadEnv(mode, process.cwd());
		process.env = { ...process.env, ...loadedEnv };
		return mergeConfig(config, {
			server: {
				hmr: {
					port: process.env.VITE_STORYBOOK_HMR_PORT,
				},
			},
		});
	},
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {},
	},
};
export default config;
