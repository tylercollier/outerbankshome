import { error } from '@sveltejs/kit';
import { allowedCategories } from './area';

export function return404IfInvalidCategory(area, category) {
	if (!allowedCategories[area].includes(category)) {
		error(404, 'Not found');
	}
}