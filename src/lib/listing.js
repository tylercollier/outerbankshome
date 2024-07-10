export function prettyJsonList(jsonList) {
	return JSON.parse(jsonList).join(', ');
}
