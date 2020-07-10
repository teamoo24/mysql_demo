const path = require('path');

module.exports = (env, argv) => {
	return {
		mode: 'production',
		entry: {
			index : path.join(__dirname, 'src' ,'index.ts'),
		},
		node: {
			fs:'empty',
			net: 'empty',
			tls: 'empty'
		},
		output: {
      		path: path.join(__dirname, 'www'),
      		filename: 'game.js',
      		library: 'game',
      		libraryTarget: 'umd'
    	},
    	resolve: {
    		extensions: ['.ts', '.js'],
    		modules: [
    			path.resolve(__dirname, 'src'),"node_modules"
    		]
    	},
		module: {
			rules: [
				{
					test : /\.ts$/,
					use: [{ loader: 'ts-loader'}]
				}
			]
		}
	}
};