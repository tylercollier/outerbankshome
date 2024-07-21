// https://stackoverflow.com/a/16233919/135101
const dollarsOnlyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',

	// These options are needed to round to whole numbers if that's what you want.
	minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const dollarsAndCentsFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',

	minimumFractionDigits: 2,
});

export function formatDollarsOnly(amountStr) {
	const float = Math.round(parseFloat(amountStr));
	return dollarsOnlyFormatter.format(float);
}

export function formatDollarsAndCents(amountStr) {
	const float = Math.round(parseFloat(amountStr));
	return dollarsAndCentsFormatter.format(float);
}
