import { getSearchResultListings } from '$lib/server/db.js';
import { sql } from 'kysely';

export const load = async () => {
	const singleLevelListings = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`match(ArchitecturalStyle) against ('ranch')`));
	});
	const elevatedListings = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`match(FoundationDetails) against ('masonry')`));
	});
	const beachBoxListings = await getSearchResultListings('Residential', queryBuilder => {
		return queryBuilder
			.where('PropertySubType', 'in', ['Single Family Residence'])
			.where(sql(`match(ArchitecturalStyle) against ('beach box')`));
	});
	return {
		singleLevelListings,
		elevatedListings,
		beachBoxListings,
	}
};
