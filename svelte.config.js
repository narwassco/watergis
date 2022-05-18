import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			// YOUR github repository name
			base: process.env.NODE_ENV === 'production' ? '' : ''
		},
		prerender: {
			default: true
		}
	},
	vite: {
		alias: {
			$lib: path.resolve('src/lib')
		}
	}
};

export default config;
