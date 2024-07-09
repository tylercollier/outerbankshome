import { error } from '@sveltejs/kit';
import { getListing } from '$lib/db.js';

export const load = async ({ params }) => {
	const mlsId = params.address.match(/(\d+)-.*/)[1];
	if (!mlsId) {
		error(404, 'Not found');
	}
	const listing = await getListing(mlsId);

	if (listing) {
		return { listing }
	}

	error(404, 'Not found');
};