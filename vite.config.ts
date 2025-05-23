import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {visualizer} from 'rollup-plugin-visualizer';
import viteImagemin from 'vite-plugin-imagemin';
import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig(({mode}) => ({
	base: '/new2025',
	plugins: [
		vue({
			template: {
				compilerOptions: {
					// Indique à Vue de traiter toute balise qui commence par "calculo-" comme un Custom Element
					isCustomElement: (tag) => tag.startsWith('calculo-'),
				},
			},
		}),
		ViteSitemap({
			hostname: 'https://eliazoura.fr',
			// Vous pouvez ajouter d'autres options ici

			// la configuration additionnelle peut être nécessaire selon votre projet
		}),

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
