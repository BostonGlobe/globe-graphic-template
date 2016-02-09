var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');


var src = 'src/dev/dev.js';

gulp.task('js-dev', function() {
	return gulp.src(src)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(rename('main.js'))
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({ stream: true }));
});