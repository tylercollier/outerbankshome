import urljoin from 'url-join';

export const basePath = '/outer banks/real estate';

export function makeLink(sub) {
	return urljoin(basePath, sub);
}

export function isPrintPage($page) {
	return $page.url.searchParams.get('print') === 'true';
}
