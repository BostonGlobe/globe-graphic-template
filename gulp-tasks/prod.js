var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function() {
	runSequence(
		'assets-prod',
		'html-prod'
	);
});