<script lang="ts">
	import Header from '../components/Header.svelte';
	import DrawerContent from '../components/DrawerContent.svelte';
	import Map from '../components/Map.svelte';
	import { selectedStyle } from '../stores';
	import { config } from '../config';

	let drawerOpen = false;

	const defaultStyle = config.styles[0];
	selectedStyle.update(() => defaultStyle);
</script>

<svelte:head>
	<title>Water and Sewerage Map for Narok Water</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-170080825-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-170080825-1');
	</script>
</svelte:head>

<Header bind:drawerOpen />
<DrawerContent bind:open={drawerOpen}>
	<Map />
</DrawerContent>
