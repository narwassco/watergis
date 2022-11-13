<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import { selectedStyle } from '$lib/stores';
	import { config } from '$config';

	const defaultStyle = config.styles[0];
	selectedStyle.update(() => defaultStyle);
</script>

<sveltekit:head>
	<title>{config.title}</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-170080825-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-170080825-1');
	</script>
</sveltekit:head>

<Map />
