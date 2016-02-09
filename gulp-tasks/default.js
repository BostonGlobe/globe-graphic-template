var gulp = require('gulp');

gulp.task('default', ['html-dev', 'css-dev', 'js-dev', 'browser-sync'], function () {
    gulp.watch('src/dev/**/*.styl', ['css-dev']);
    gulp.watch('src/dev/**/*.js', ['js-dev']);
    gulp.watch('src/dev/assets/**/*', ['assets-dev']);
    gulp.watch('src/dev/*.html', ['html-dev']);
});