import { load as categoryLoad } from '$lib/server/category';
import { homeCategory } from '$lib/category';

export const load = async ({ params }) => {
	const areaParam = params.area;
	return categoryLoad(areaParam, homeCategory);
};
