const path = require('path');


module.exports = {
	entry: './src/index.js',
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'file-loader?name=[name].css',
					'extract-loader',
					'css-loader',
					{
					  loader: 'resolve-url-loader',
					  // options: {
					  // 	sourceMap: true,
          			// 	sourceMapContents: false
					  // }
					},
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					'file-loader?name=img/[name].[ext]'
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader?name=fonts/[name].[ext]'
				],
			},
		]
	},
}
