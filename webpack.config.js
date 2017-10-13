module.exports = {
	entry: "./src/app/app.js",
	output: { filename: "./build/index.js" },
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
        	}
		]
	}
};
