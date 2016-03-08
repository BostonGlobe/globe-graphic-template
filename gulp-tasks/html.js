const gulp = require('gulp')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')

const src = 'src/index.html'

gulp.task('html-dev', function() {
	return gulp.src(src)
		.pipe(rename('index.html'))
		.pipe(gulp.dest('dev'))
		.pipe(browserSync.reload({ stream: true }))
})

gulp.task('html-prod', function() {
	return gulp.src('src/index.html')
		.pipe(smoosher())
		.pipe(gulp.dest('.tmp'))
})