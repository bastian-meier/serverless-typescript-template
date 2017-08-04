var path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
	entry: slsw.lib.entries,
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
	},
	target: 'node',
	module: {
		loaders: [
			{ test: /\.ts(x?)$/, loader: 'ts-loader' }
		]
	}
};