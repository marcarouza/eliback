import {src, dest} from 'gulp';
import babel from 'gulp-babel';

const transpile = () => {
	return src('src/**/*.js')
		.pipe(
			babel({
				presets: ['@babel/preset-env'], // Support des fonctionnalités ES modernes
			})
		)
		.pipe(dest('dist/'));
};

export {transpile};
