const gulp = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')

const src = 'src/css/main.styl'

gulp.task('css-dev', function () {
	gulp.src(src)
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({ stream: true }))
})

gulp.task('css-prod', function () {
	gulp.src(src)
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('.tmp'))
})