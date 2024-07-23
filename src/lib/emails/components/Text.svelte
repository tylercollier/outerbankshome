<script>
	import { Text } from 'svelte-email';
	export let style = {};
	const style2 = {};
	Object.assign(
		style2,
		{
			fontFamily: 'sans-serif',
		},
		style,
	);
</script>

<Text style={style2}>
	<slot />
</Text>
