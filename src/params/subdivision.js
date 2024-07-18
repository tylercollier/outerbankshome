import { allowedSubdivisions } from '$lib/area';

export function match(value) {
	return allowedSubdivisions.corolla.find(x => x.slug === value);
}
