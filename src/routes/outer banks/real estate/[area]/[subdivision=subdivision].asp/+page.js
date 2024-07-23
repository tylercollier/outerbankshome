export const load = async ({ data }) => {
	let proseComponent;
	if (data.hasProse) {
		try {
			// Reminder: in the following import, we inline the path, rather than creating a variable. This is important for
			// Vite's ability to do static analysis. If we use a variable, we'll see this warning:
			//   The above dynamic import cannot be analyzed by Vite.
			//   See https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations for supported dynamic import formats. If this is intended to be left as-is, you can use the /* @vite-ignore */ comment inside the import() call to suppress this warning.
			proseComponent = (
				await import(
					`../../../../../lib/components/prose/area/${data.areaParam}/subdivision/${data.subdivision.slug}.svelte`
				)
			).default;
		} catch (e) {
			// Do nothing
		}
	}
	return {
		...data,
		proseComponent,
	};
};
