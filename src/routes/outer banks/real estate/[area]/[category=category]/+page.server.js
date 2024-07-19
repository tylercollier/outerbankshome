import { return404IfInvalidCategory } from '$lib/nav';
import { getListings } from '$lib/category.js';

export const load = async ({ params }) => {
	const areaParam = params.area;
	const categoryParam = params.category;
	console.log('categoryParam1', categoryParam)
	return404IfInvalidCategory(areaParam, categoryParam);
	const { activeListings, soldListings } = await getListings(areaParam, categoryParam);
	return {
		areaParam,
		categoryParam,
		activeListings,
		soldListings,
	};
};
