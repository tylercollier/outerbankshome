import { getListingsByKeys } from '$lib/server/db';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const keys = url.searchParams.getAll('keys[]');
	const listings = await getListingsByKeys(keys)

	return json({ listings });
}
