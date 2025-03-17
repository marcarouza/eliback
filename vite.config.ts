import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {visualizer} from 'rollup-plugin-visualizer';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig(({mode}) => ({
	base: '/',
	plugins: [
		vue(),
		// Les plugins suivants sont ajoutés uniquement en mode production
		...(mode === 'production'
			? [
					visualizer({
						open: true,
					}),
					viteImagemin({
						mozjpeg: {quality: 75},
						optipng: {optimizationLevel: 7},
						pngquant: {quality: [0.6, 0.8]},
						webp: {quality: 70},
					}),
			  ]
			: []),
	],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	css: {
		postcss: './postcss.config.js',
	},
}));
