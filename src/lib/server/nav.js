import { error } from '@sveltejs/kit';
import { allowedCategories } from '$lib/category';

export const basePath = '/outer banks/real estate';

export function return404IfInvalidCategory(area, category) {
	if (!allowedCategories[area].includes(category)) {
		error(404, 'Not found');
	}
}
