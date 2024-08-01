import { error } from '@sveltejs/kit';
import { getListing } from '$lib/server/db';
import { getMlsIdFromRoute } from '$lib/address';

export const trailingSlash = 'never';

export const load = async ({ params }) => {
	const mlsId = getMlsIdFromRoute(params.address);
	if (!mlsId) {
		error(404, 'Not found');
	}
	const listing = await getListing(mlsId);

	if (listing) {
		return { listing };
	}

	error(404, 'Not found');
};
