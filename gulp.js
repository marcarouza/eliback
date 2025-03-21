import {src, dest, series} from 'gulp';
import babel from 'gulp-babel';

// Fonction de transpilation
const transpile = () => {
	return src('src/**/*.js')
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(dest('dist/'));
};

// Fonction de copie simple
const copy = () => {
	return src('src/**/*.js').pipe(dest('dist/'));
};

// Export des tâches
export {transpile, copy};

// Tâche par défaut combinée (exécution en série)
export default series(transpile, copy);

// Explications :

// series : Combine les tâches pour qu'elles soient exécutées l'une après l'autre (transpile → copy).

// Vous pouvez exécuter une tâche spécifique avec : gulp transpile ou gulp copy.