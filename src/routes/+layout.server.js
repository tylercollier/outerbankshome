export const load = async ({ url }) => {
	const isPrintPage = url.searchParams.get('print') === 'true';
	// Create a URL with ?print=true (it's ok if that's already the current URL).
	const printUrl = new URL(url);
	printUrl.searchParams.set('print', 'true');
	const printHref = printUrl.toString();

	return {
		isPrintPage,
		printHref,
	};
};
