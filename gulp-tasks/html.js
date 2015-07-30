var gulp = require('gulp');
var smoosher = require('gulp-smoosher');
var browserSync = require('browser-sync');

var src = 'src/dev/index.html';

gulp.task('html-dev', function() {
	return gulp.src(src)
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('html-prod', function() {
	return gulp.src(src)
		pipe(smoosher())
		.pipe(gulp.dest('dist'));
});