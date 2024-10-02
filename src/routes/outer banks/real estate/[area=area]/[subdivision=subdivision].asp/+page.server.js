import { getCity } from '$lib/area';
import { allowedSubdivisions } from '$lib/subdivision';
import { filterActive, filterSold, getSearchResultListings } from '$lib/server/db';
import pathLib from 'path';
import fsPromises from 'fs/promises';

export const load = async ({ params }) => {
	const subdivision = allowedSubdivisions[params.area].find(x => x.slug === params.subdivision);
	const areaParam = params.area;
	const city = getCity(areaParam);
	const modifyQuery = queryBuilder => {
		let qb
		console.log('subdivision', subdivision)
		qb = queryBuilder
			.where('City', '=', city)
			.where('PropertySubType', 'in', subdivision.propertySubType ?? ['Single Family Residence'])
			;
		if (Array.isArray(subdivision.databaseName)) {
			qb = qb
				.where('SubdivisionName', 'in', subdivision.databaseName);
		} else {
			qb = qb
				.where('SubdivisionName', '=', subdivision.databaseName);
		}
		return qb;
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
