var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/app/app.js",
	output: {
		path: path.resolve("build"),
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader" 
			}, {
            	test: /\.less$/,
            	use: [
            		{ loader: "style-loader" },
            		{ loader: "css-loader" },
            		{ loader: "less-loader" }
            	]
        	}]
	},
	plugins: [new HtmlWebpackPlugin({
		favicon: 'src/app/images/favicon.ico',
		template: 'src/app/index.html'
	})]
};
