import { error } from '@sveltejs/kit';

export const trailingSlash = 'always';

export const load = async ({ params }) => {
	const allowedAreas = [
		'corolla',
	];
	const area = params.area;
	if (!allowedAreas.includes(area)) {
		error(404, `We do not serve the area ${area}`);
	}
};
