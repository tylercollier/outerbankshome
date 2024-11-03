import { getSearchResultListings } from '$lib/server/db.js';
import { sql } from 'kysely';

export const load = async () => {
	const singleLevelListings = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`json_contains(ArchitecturalStyle, '"Ranch"')`));
	});
	const elevatedListings = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`json_contains(FoundationDetails, '"Masonry"')`));
	});
	const beachBoxListings = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`json_contains(ArchitecturalStyle, '"Beach Box"')`));
	});
	return {
		singleLevelListings,
		elevatedListings,
		beachBoxListings,
	}
};
