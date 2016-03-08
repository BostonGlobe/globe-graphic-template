const gulp = require('gulp')
const rename = require('gulp-rename')
const browserSync = require('browser-sync')
const webpackStream = require('webpack-stream')
const webpack  = require('webpack')
const plumber = require('gulp-plumber')
const report = require('../report-error.js')

const config = {
	module: {
		loaders: [
            { test: /\.csv?$/, loader: 'dsv-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
                presets: ['es2015']
            }},
        ]
	}
}

const prod_config = Object.assign({}, config, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin()
	]
})

const src = 'src/js/main.js'

gulp.task('js-dev', function() {
	return gulp.src(src)
		.pipe(plumber({ errorHandler: report }))
		.pipe(webpackStream(config))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('dev'))
		.pipe(browserSync.reload({stream:true}))
})

gulp.task('js-prod', function() {
	return gulp.src(src)
		.pipe(webpackStream(prod_config))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('.tmp'))
})
