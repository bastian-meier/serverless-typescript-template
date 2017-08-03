var path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
	entry: slsw.lib.entries,
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	},
	target: 'node',
	module: {
		loaders: [
			{ test: /\.ts(x?)$/, loader: 'ts-loader' }
		]
	}
};