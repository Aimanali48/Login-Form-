const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanBuild = require('clean-webpack-plugin')
module.exports = {
	entry: './src/index',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist', 'bundle')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env', 'es2015']
				}
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},

	plugins: [
		new UglifyJSPlugin(),
		// new CleanBuild([ 'dist/bundle'])	
	],
 watchOptions : {
	 poll :true 
 } , 
devServer :  {
	contentBase : path.join(__dirname, '/'),
	compress : true ,
	historyApiFallback : true ,
	port : 3000

}



};
