var gulp = require('gulp');
var babel = require('gulp-babel');

var src = 'src/dev/dev.js';

gulp.task('js-dev', function() {
	return gulp.src()
		.pipe(babel())
		.pipe(gulp.dest('src'));
});