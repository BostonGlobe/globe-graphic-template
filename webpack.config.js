const path = require('path');

module.exports = {
	entry: './src/dev/js/entry.js',
	output: {
		path: path.resolve(__dirname, 'src'),
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env']
              ]
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true
            }
          }
        ]
      }
    ]
  }
}
