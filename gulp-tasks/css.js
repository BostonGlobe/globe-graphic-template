var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

var src = 'src/dev/dev.styl';

gulp.task('css-dev', function () {
	gulp.src(src)
        .pipe(stylus())
		.pipe(autoprefixer())
		.pipe(rename('main.css'))
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({stream:true}));
});