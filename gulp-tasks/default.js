const gulp = require('gulp')

gulp.task('default', ['html-dev', 'css-dev', 'js-dev', 'browser-sync'], function () {
    gulp.watch('src/css/**/*.styl', ['css-dev'])
    gulp.watch('src/js/**/*.js', ['js-dev'])
    gulp.watch('src/assets/**/*', ['assets-dev'])
    gulp.watch('src/index.html', ['html-dev'])
})
