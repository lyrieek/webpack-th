const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

class WebpackTH {

	constructor(initConfig) {
		this.version = '1.0.1';
		this.config = initConfig || {};
	}

	add(addConfig) {
		this.config = merge(this.config, addConfig);
	}

	setPath(intput, output) {
		this.intput = intput;
		this.output = output;
	}

	addHTML(array) {
		if (!(array instanceof Array)) {
			array = [array];
		}
		array.map((fileName) =>
			config.plugins.push(
				new HtmlWebpackPlugin({
					filename: this.intput + fileName + '.html',
					template: this.output + fileName + '.html',
					inject: true,
					minify: {
						removeComments: true,
						collapseWhitespace: true,
						removeAttributeQuotes: true,
						minifyCSS: true,
						minifyJS: true
					},
					chunks: [],
					chunksSortMode: 'dependency'
				})
			))
	}

	config(){
		return this.config;
	}

}

module.exports = WebpackTH;