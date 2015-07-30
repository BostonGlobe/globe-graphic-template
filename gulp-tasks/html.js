var gulp = require('gulp');
var smoosher = require('gulp-smoosher');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

var src = 'src/dev/dev.html';

gulp.task('html-dev', function() {
	return gulp.src(src)
		.pipe(rename('index.html'))
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('html-prod', function() {
	return gulp.src('src/index.html')
		.pipe(smoosher())
		.pipe(gulp.dest('dist'));
});