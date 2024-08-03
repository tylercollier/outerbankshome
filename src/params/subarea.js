import { allowedSubareas } from '$lib/subarea';

export function match(slug) {
	// TODO: I don't know how to get the area parameter name in this matcher. We only get the subarea param. Thus, we
	//   currently allow mismatches, e.g. as long as the subarea exists by slug in one area, we're acting as if it
	//   exists in all area. Ultimately need to fix this. One hacky idea would be to look at the URL here.

	return Object.values(allowedSubareas).some(subarea => {
		return subarea.find(x => x.slug === slug);
	});
}
