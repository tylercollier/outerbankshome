import { allowedAreas } from '$lib/area.js';

export function match(slug) {
	return allowedAreas.includes(slug);
}
