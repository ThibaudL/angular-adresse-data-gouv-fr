const path = require("path");
module.exports = {
    entry: './app/main.ts',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist',
        path : path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [ /node_modules/ ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};