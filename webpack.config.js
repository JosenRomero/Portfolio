const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: {
		main: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js'
	},

    // mode: 'development',

	// devtool: 'source-map',

	devServer: {
		open: true,
		port: 3001
	},

	module: {

		rules: [
			{
				test: /\.js$/,
        		use: {
          			loader: 'babel-loader',
          			options: { 
						presets: [
							['@babel/preset-env']
						] 
					}
        		}
			},
			{
				test: /\.css$/, 
				use: [
					'style-loader', 
					'css-loader'
				]	
			}
		]

	},

	plugins: [

		new CleanWebpackPlugin({
			root: path.resolve(__dirname, "./build")
		}),

		new HtmlWebpackPlugin({ 
			template: './src/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkAttributes: true,
				useShortDoctype: true
			}
		}),

		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/assets/images", to: "images" } 
			]
		})

	]

}