import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	base: '/', // Définit la base URL comme dans votre fichier initial
	server: {
		port: 3000, // Définit le port local (optionnel)
	},
	resolve: {
		alias: {
			'@': '/src', // Utilise l'alias "@" pour le dossier src
		},
	},
});
