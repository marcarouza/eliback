const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp'); // Ajout du plugin WebP

(async () => {
	// Optimisation des fichiers JPG et PNG
	const optimizedFiles = await imagemin(['src/assets/images/*.{jpg,png}'], {
		destination: 'src/assets/images-optimized',
		plugins: [
			imageminMozjpeg({quality: 75}),
			imageminPngquant({quality: [0.6, 0.8]}),
		],
	});

	console.log('Images optimisées (JPG/PNG) :', optimizedFiles);

	// Conversion en WebP
	const webpFiles = await imagemin(['src/assets/images/*.{jpg,png}'], {
		destination: 'src/assets/images-webp', // Dossier de sortie pour les WebP
		plugins: [
			imageminWebp({quality: 70}), // Qualité de compression pour WebP
		],
	});

	console.log('Images converties en WebP :', webpFiles);
})();
