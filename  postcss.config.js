module.exports = {
	plugins: [
		require('@fullhuman/postcss-purgecss')({
			content: ['./src/**/*.vue', './index.html'], // Fichiers source à analyser
			defaultExtractor: (content) =>
				content.match(/[\w-/:]+(?<!:)/g) || [], // Classes CSS dynamiques
			enabled: process.env.NODE_ENV === 'production', // Activer uniquement en mode production
		}),
	],
};
