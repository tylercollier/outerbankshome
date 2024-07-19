import { allowedSubdivisions } from '$lib/area';

export function match(subdivisionParam) {
	// TODO: I don't know how to get the area parameter name in this matcher. We only get the subdivision param. Thus, we
	//   currently allow mismatches, e.g. as long as the subdivision exists by slug in one area, we're acting as if it
	//   exists in all area. Ultimately need to fix this. One hacky idea would be to look at the URL here.

	return Object.values(allowedSubdivisions).some((subdivisions) => {
		return subdivisions.find((x) => x.slug === subdivisionParam);
	});
}
