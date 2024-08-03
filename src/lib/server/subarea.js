// I'm not sure of a better way to match these (area + subarea) slugs up with what's in lib/subarea.js. It seems sort of
// a shame to repeat ourselves here. Oh well, maybe not so bad? But the reason we have this separate file in this server
// directory is because here we have non-serializable stuff like functions.
export const allowedSubareas = {
	corolla: [
		{
			slug: 'corolla-4-bedroom-homes',
			buildQueryFn:  queryBuilder => {
				return queryBuilder
					.where('BedroomsTotal', '=', 4);
			}
		},
		{
			slug: 'corolla-5-bedroom-homes',
			buildQueryFn:  queryBuilder => {
				return queryBuilder
					.where('BedroomsTotal', '=', 5);
			}
		},
		{
			slug: 'corolla-6-bedroom-homes',
			buildQueryFn:  queryBuilder => {
				return queryBuilder
					.where('BedroomsTotal', '=', 6);
			}
		},
		{
			slug: 'corolla-8-bedroom-homes',
			buildQueryFn:  queryBuilder => {
				return queryBuilder
					.where('BedroomsTotal', '=', 8);
			}
		},
	],
};
