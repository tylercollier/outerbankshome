/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {
			colors: {
				obxorange: {
					DEFAULT: '#ff7e40',
				},
				linkblue: {
					DEFAULT: '#4380ee',
				},
				darkblue: {
					DEFAULT: '#041c48',
					300: '#c0c6d1',
					500: '#36496d',
				}
			}
		},
	},
};
