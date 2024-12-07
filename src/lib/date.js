import { format, add, parseISO } from 'date-fns';

export function formatDate(date) {
	if (!date) {
		return '';
	}
	if (!(date instanceof Date)) {
		// Originally I intended to force a type of Date, but I'm now allowing data to be serialized, which will coerce it
		// to be a string.
		if (typeof date === 'string') {
			date = parseISO(date);
		} else {
			// We're throwing an error to track down such usages
			throw new Error('date is not a string or Date: ' + date);
		}
	}
	return format(date, 'M/d/yyyy');
}

// If the date comes from the database and the database field is text (not datetime), then when we turn it into a date,
// the date will be affected by the timezone offset. We counter that here by undoing the offset.
export function formatDateFromString(dateStr) {
	if (!dateStr) {
		return '';
	}
	let date = new Date(dateStr);
	const offset = date.getTimezoneOffset();
	date = add(date, {
		minutes: offset,
	});
	return format(date, 'M/d/yyyy');
}
