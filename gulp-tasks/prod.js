var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function() {
	runSequence(
		'css-prod',
		'js-prod',
		'assets-prod',
		'html-prod'
	);
});