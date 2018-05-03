module.exports = {
	entry: './src/dev/entry.js',
	output: {
		path: './src',
		filename: 'main.js',
	},
	module: {
    rules: [
      {
        test: /\.csv?$/,
        use: ['dsv-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env']
            ]
          }
        }
      }]
	  }
	}
}
