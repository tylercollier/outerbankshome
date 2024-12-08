import { getSearchResultListings } from '$lib/server/db.js';
import { sql } from 'kysely';

export const load = async () => {
	const singleLevelListingsWithMeta = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`json_contains(ArchitecturalStyle, '"Ranch"')`));
	});
	const elevatedListingsWithMeta = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`json_contains(FoundationDetails, '"Masonry"')`));
	});
	const beachBoxListingsWithMeta = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`json_contains(ArchitecturalStyle, '"Beach Box"')`));
	});
	return {
		singleLevelListingsWithMeta,
		elevatedListingsWithMeta,
		beachBoxListingsWithMeta,
	}
};
