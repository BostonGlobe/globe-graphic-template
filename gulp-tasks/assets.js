var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

var src = 'src/dev/assets/**/*';

gulp.task('assets-dev', function(cb) {
	return gulp.src(src)
		.pipe(changed('src/assets'))
		.pipe(changed('src/assets'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('assets-prod', function(cb) {
	return gulp.src('src/assets/**/*')
		.pipe(changed('dist/assets'))
		.pipe(gulp.dest('dist/assets'));
});

