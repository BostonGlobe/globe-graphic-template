var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');


var src = 'src/dev/dev.js';

gulp.task('js-dev', function() {
	return gulp.src(src)
		.pipe(babel())
		.pipe(rename('main.js'))
		.pipe(gulp.dest('src'));
});