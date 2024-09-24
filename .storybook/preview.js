import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/app.scss';

const newViewports = {
	...MINIMAL_VIEWPORTS,
	'Tailwind sm': {
		name: 'Tailwind sm',
		styles: {
			width: '680px',
			height: '1000px',
		},
		type: 'mobile',
	},
	'Tailwind md': {
		name: 'Tailwind md',
		styles: {
			width: '768px',
			height: '1000px',
		},
		type: 'mobile',
	},
	'Tailwind lg': {
		name: 'Tailwind lg',
		styles: {
			width: '1024px',
			height: '1000px',
		},
		type: 'mobile',
	},
	'Tailwind xl': {
		name: 'Tailwind xl',
		styles: {
			width: '1280px',
			height: '1000px',
		},
		type: 'mobile',
	},
	'Tailwind 2xl': {
		name: 'Tailwind 2xl',
		styles: {
			width: '1536px',
			height: '1000px',
		},
		type: 'mobile',
	},
};

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		viewport: {
			viewports: newViewports,
			// defaultViewport: 'responsive',
		},
	},
};

export default preview;
