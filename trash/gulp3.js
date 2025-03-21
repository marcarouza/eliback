import {src, dest} from 'gulp';
import babel from 'gulp-babel';

// Fonction combinée
const processJs = () => {
	return src('src/**/*.js')
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(dest('dist/')); // Transpile et copie dans dist
};

export {processJs};
export default processJs;
