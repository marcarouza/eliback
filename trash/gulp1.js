import {src, dest} from 'gulp';

const copy = () => {
	return src('src/**/*.js').pipe(dest('dist/'));
};

export {copy};
