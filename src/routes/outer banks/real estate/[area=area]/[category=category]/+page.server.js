import { load as categoryLoad } from '$lib/server/category';

export const load = async ({ params }) => {
	const areaParam = params.area;
	const categoryParam = params.category;
	return categoryLoad(areaParam, categoryParam);
};
