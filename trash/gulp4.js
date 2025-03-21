import {src, dest, parallel} from 'gulp';
import babel from 'gulp-babel';

// Transpilation des fichiers
const transpile = () => {
	return src('src/**/*.js')
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(dest('dist/'));
};

// Copie des fichiers
const copy = () => {
	return src('src/**/*.js').pipe(dest('dist/'));
};

// Tâche par défaut (exécution parallèle)
export default parallel(transpile, copy);


/*


Explications :

parallel exécute transpile et copy simultanément, ce qui peut être plus rapide si vous avez plusieurs fichiers ou des processus indépendants.

*/