const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./frontend/polle.jsx",
    output: {
        path: path.resolve(__dirname),
        filename: "app/assets/javascripts/bundle.js"
        //app/assets/javascripts/bundle.js
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
