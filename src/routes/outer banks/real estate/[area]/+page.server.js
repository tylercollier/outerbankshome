import { error } from '@sveltejs/kit';
import { getListingsForArea } from '$lib/db';

export const load = async ({ params }) => {
	const allowedAreas = [
		'corolla',
	];
	const area = params.area;
	if (!allowedAreas.includes(area)) {
		error(404, 'Not found');
	}

	const listings = await getListingsForArea(area, ['Single Family Residence']);

	return {
		area,
		listings,
	}
};