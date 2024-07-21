import { allowedSubdivisions, getCity } from '$lib/area';
import { filterActive, filterSold, getSearchResultListings } from '$lib/server/db';
import pathLib from 'path';
import fsPromises from 'fs/promises';

export const trailingSlash = 'never';

export const load = async ({ params }) => {
	const subdivision = allowedSubdivisions[params.area].find((x) => x.slug === params.subdivision);
	const areaParam = params.area;
	const city = getCity(areaParam);
	const modifyQuery = (queryBuilder) => {
		return queryBuilder
			.where('City', '=', city)
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where('SubdivisionName', '=', subdivision.name);
	};
	const activeListings = await getSearchResultListings('Residential', filterActive(modifyQuery));
	const soldListings = await getSearchResultListings('Residential', filterSold(modifyQuery));

	const proseRelativePath = `../../../../../lib/components/prose/area/${areaParam}/subdivision/${subdivision.slug}.svelte`;
	const prosePath = pathLib.join(import.meta.dirname, proseRelativePath);
	let hasProse = false;
	try {
		await fsPromises.access(prosePath, fsPromises.constants.R_OK);
		hasProse = true;
	} catch (err) {
		// Nothing to do
	}
	return {
		areaParam,
		activeListings,
		soldListings,
		subdivision,
		hasProse,
	};
};
