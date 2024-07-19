import { categories } from '$lib/category';

export function match(slug) {
	return categories.includes(slug);
}
