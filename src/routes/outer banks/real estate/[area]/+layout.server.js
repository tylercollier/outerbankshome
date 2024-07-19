import { error } from '@sveltejs/kit';
import { allowedAreas, getAreaNameFromParam } from '$lib/area';

export const trailingSlash = 'always';

export const load = async ({ params }) => {
	const areaParam = params.area;
	if (!allowedAreas.includes(areaParam)) {
		const areaName = getAreaNameFromParam(areaParam);
		error(404, `We do not serve the area ${areaName}`);
	}
};
