import { getAreaNameFromParam } from '$lib/area';

// The reason it's the empty string is because it's the slug used in the URL. Instead of e.g.
// /corolla/homes, we'll just have /corolla/.
export const homeCategory = '';

export const categories = [
	homeCategory,
	'canalfront-homes',
	'condos',
	'land',
	'oceanfront-homes',
	'soundfront-homes',
	'water-front-homes',
	'waterfront',
	'waterfront-homes',

	'colington-harbor',
];

export const allowedCategories = {
	corolla: [
		homeCategory,
		'condos',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		'land',
	],
	duck: [
		homeCategory,
		'condos',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		'land',
	],
	'southern-shores': [
		homeCategory,
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		'land',
	],
	'martins point': [
		homeCategory,
		// 'Sold',
	],
	KittyHawk: [
		homeCategory,
		'condos',
		// 'Sold',
		'oceanfront-homes',
		'waterfront-homes',
		'land',
	],
	KillDevilHills: [
		homeCategory,
		'condos',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'waterfront',
		// 'investment-homes',
		// 'land',
	],
	'nags head': [
		homeCategory,
		'condos',
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
		'water-front-homes',
		// 'investment-homes',
		'land',
	],
	manteo: [
		homeCategory,
		'condos',
		'soundfront-homes',
		// 'Sold',
		'land',
	],
	colington: [
		homeCategory,
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'waterfront-homes',
		'colington-harbor',
	],
	avon: [
		homeCategory,
		'condos',
		'land',
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	buxton: [
		homeCategory,
		'land',
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	frisco: [
		homeCategory,
		'land',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	'hatteras island': [
		homeCategory,
		'condos',
		'land',
		'canalfront-homes',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	rodanthe: [
		homeCategory,
		'condos',
		'land',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	salvo: [
		homeCategory,
		'land',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
	waves: [
		homeCategory,
		'land',
		'soundfront-homes',
		// 'Sold',
		'oceanfront-homes',
	],
};

export function getTitleTag(areaParam, categoryParam) {
	const areaName = getAreaNameFromParam(areaParam);
	let partial;
	if (categoryParam === homeCategory) {
		partial = 'Homes, Houses & Beach Houses For Sale';
	} else if (categoryParam === 'canalfront-homes') {
		partial = 'Canalfront Homes and Houses for Sale';
	} else if (categoryParam === 'condos') {
		partial = 'Condos and Town Houses for Sale';
	} else if (categoryParam === 'land') {
		partial = 'Lots & Land For Sale';
	} else if (categoryParam === 'oceanfront-homes') {
		partial = 'Oceanfront Homes for Sale';
	} else if (categoryParam === 'soundfront-homes') {
		partial = 'Soundfront Homes for Sale';
	} else if (isWaterfront(categoryParam)) {
		partial = 'Waterfront Homes For Sale';
	}
	return `${areaName} ${partial}`;
}

export function getH1(areaParam, categoryParam) {
	const areaName = getAreaNameFromParam(areaParam);
	let partial;
	if (categoryParam === homeCategory) {
		partial = 'Homes, Houses & Beach Houses For Sale';
	} else if (categoryParam === 'canalfront-homes') {
		partial = 'Canalfront Homes For Sale';
	} else if (categoryParam === 'condos') {
		partial = 'Condos and Town Houses For Sale';
	} else if (categoryParam === 'land') {
		partial = 'Lots & Land For Sale';
	} else if (categoryParam === 'oceanfront-homes') {
		partial = 'Oceanfront Homes for Sale';
	} else if (categoryParam === 'soundfront-homes') {
		partial = 'Soundfront Homes for Sale';
	} else if (isWaterfront(categoryParam)) {
		partial = 'Water Front Homes';
	}
	return `${areaName} ${partial}`;
}

export function getCategoryName(slug) {
	if (slug === homeCategory) {
		return 'Homes';
	} else if (slug === 'condos') {
		return 'Condos';
	} else if (slug === 'canalfront-homes') {
		return 'Canalfront Homes';
	} else if (slug === 'oceanfront-homes') {
		return 'Oceanfront Homes';
	} else if (slug === 'soundfront-homes') {
		return 'Soundfront Homes';
		// } else if (slug === 'Sold') {
		// 	return 'Sold Homes';
		// } else if (slug === 'investment-homes') {
		// 	return 'Investment Homes';
	} else if (slug === 'land') {
		return 'Land/Lots';
	} else if (isWaterfront(slug)) {
		return 'Waterfront Homes';
	} else if (slug === 'colington-harbor') {
		return 'Harbor';
	}
}

export function isWaterfront(categoryParam) {
	return ['waterfront', 'waterfront-homes', 'water-front-homes'].includes(categoryParam);
}

// Svelte doesn't seem to like components named (exactly) '.svelte', so we must use SOME name, so how about 'homes'?
// Also we can have a single name for waterfront related prose.
export function getCategoryProseBaseFileName(categoryParam) {
	if (categoryParam === homeCategory) {
		return 'homes';
	} else if (isWaterfront(categoryParam)) {
		return 'waterfront-homes';
	}
	return categoryParam;
}

export const clientSideLoad = async ({ data }) => {
	let proseComponent;
	if (data.hasProse) {
		try {
			const baseFileName = getCategoryProseBaseFileName(data.categoryParam);
			// Reminder: in the following import, we inline the path, rather than creating a variable. This is important for
			// Vite's ability to do static analysis. If we use a variable, we'll see this warning:
			//   The above dynamic import cannot be analyzed by Vite.
			//   See https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations for supported dynamic import formats. If this is intended to be left as-is, you can use the /* @vite-ignore */ comment inside the import() call to suppress this warning.
			proseComponent = (
				await import(`./components/prose/area/${data.areaParam}/category/${baseFileName}.svelte`)
			).default;
		} catch (e) {
			// Do nothing
		}
	}
	return {
		...data,
		proseComponent,
	};
};
