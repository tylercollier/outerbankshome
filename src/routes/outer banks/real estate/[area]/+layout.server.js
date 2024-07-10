import { error } from '@sveltejs/kit';
import { allowedAreas } from '$lib/area';

export const trailingSlash = 'always';

export const load = async ({ params }) => {
	const area = params.area;
	if (!allowedAreas.includes(area)) {
		error(404, `We do not serve the area ${area}`);
	}
};
