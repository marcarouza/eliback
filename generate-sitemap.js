//=======================================================================================
// GENERATION DE SITEMAP
//=======================================================================================

import fs from 'fs';
import {SitemapStream, streamToPromise} from 'sitemap';
import {routeSitemap} from './src/router/export-routes.js';

// Extraction du tableau des slugs, en priorisant "alias" s'il existe
const tabSlug = routeSitemap.map((route) => route.alias || route.path);
console.log('TabSlug:', tabSlug);

// Création de la liste des liens pour le sitemap avec des options pour chaque URL.
const links = tabSlug.map((slug) => ({
	// Si la chaîne est vide, on renvoie la racine "/".
	// Sinon, on s'assure que l'URL commence par "/".
	url: slug === '' ? '/' : slug.startsWith('/') ? slug : `/${slug}`,
	changefreq: slug === '' ? 'daily' : 'monthly',
	priority: slug === '' ? 1.0 : 0.7,
}));

console.log('🚀 ~ links:', links);

// Génération et sauvegarde du sitemap dans le fichier "./public/sitemap.xml"
(async () => {
	try {
		// Création du flux de sitemap avec le hostname de votre site
		const stream = new SitemapStream({
			hostname: 'https://eliazoura.fr',
		});

		// Injection de chaque lien dans le flux
		links.forEach((link) => stream.write(link));
		stream.end();

		// Conversion du flux en une chaîne XML
		const sitemapXML = await streamToPromise(stream).then((sm) =>
			sm.toString()
		);

		// Sauvegarde du sitemap dans le fichier souhaité
		fs.writeFileSync('./public/sitemap.xml', sitemapXML);
		console.log('Sitemap généré avec succès dans ./public/sitemap.xml');
	} catch (error) {
		console.error('Erreur lors de la génération du sitemap :', error);
	}
})();
