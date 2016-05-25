module.exports = {
	entry: './src/dev/entry.js',
	output: {
		path: './src',
		filename: 'main.js',
	},
	module: {
		loaders: [
			{ test: /\.csv?$/, loader: 'dsv-loader' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
		],
	},
}
