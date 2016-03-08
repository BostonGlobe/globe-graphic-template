const gulp = require('gulp')
const browserSync = require('browser-sync')

const src = 'src/assets/**/*'

gulp.task('assets-prod', function(cb) {
	return gulp.src(src)
		.pipe(gulp.dest('dev/assets'))
})

gulp.task('assets-prod', function(cb) {
	return gulp.src(src)
		.pipe(gulp.dest('dist/assets'))
})

