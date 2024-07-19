import { format } from 'date-fns';

export function formatDate(dateStr) {
	const date = new Date(dateStr);
	return format(date, 'M/dd/yyyy');
}
