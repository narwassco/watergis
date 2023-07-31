<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import { selectedStyle } from '$lib/stores';
	import { config } from '$config';
	import { onMount } from 'svelte';

	const defaultStyle = config.styles[0];
	selectedStyle.update(() => defaultStyle);

	onMount(async () => {
		window.global = window;
		const Buffer = await (await import('buffer')).Buffer;
		window.Buffer = Buffer;
	});
</script>

<sveltekit:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-92S88ES5ZS"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-92S88ES5ZS');
	</script>
</sveltekit:head>

<Map />
