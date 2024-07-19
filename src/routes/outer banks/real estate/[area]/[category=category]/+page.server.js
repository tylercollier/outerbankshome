import { return404IfInvalidCategory } from '$lib/server/nav';
import { getListings } from '$lib/server/category';

export const load = async ({ params }) => {
	const areaParam = params.area;
	const categoryParam = params.category;
	return404IfInvalidCategory(areaParam, categoryParam);
	const { activeListings, soldListings } = await getListings(areaParam, categoryParam);
	return {
		areaParam,
		categoryParam,
		activeListings,
		soldListings,
	};
};
