import { getCity } from '$lib/area';
import { allowedSubareas as clientAllowedSubareas } from '$lib/subarea';
import { allowedSubareas as serverAllowedSubareas } from '$lib/server/subarea';
import { filterActive, filterSold, getSearchResultListings } from '$lib/server/db';
import pathLib from 'path';
import fsPromises from 'fs/promises';

export const load = async ({ params }) => {
	const serverSubarea = serverAllowedSubareas[params.area].find(x => x.slug === params.subarea);
	const areaParam = params.area;
	const city = getCity(areaParam);
	const modifyQuery = queryBuilder => {
		const qb = queryBuilder
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
		return serverSubarea.buildQueryFn(qb);
	};
	const activeListings = await getSearchResultListings('Residential', filterActive(modifyQuery));
	const soldListings = await getSearchResultListings('Residential', filterSold(modifyQuery));

	const proseRelativePath = `../../../../../lib/components/prose/area/${areaParam}/subarea/${serverSubarea.slug}.svelte`;
	const prosePath = pathLib.join(import.meta.dirname, proseRelativePath);
	let hasProse = false;
	try {
		await fsPromises.access(prosePath, fsPromises.constants.R_OK);
		hasProse = true;
	} catch (err) {
		// Nothing to do
	}
	const clientSubarea = clientAllowedSubareas[params.area].find(x => x.slug === params.subarea);
	return {
		areaParam,
		activeListings,
		soldListings,
		subarea: clientSubarea,
		hasProse,
	};
};
