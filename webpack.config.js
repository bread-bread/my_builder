const path = require('path');

module.exports = {
    entry: './source/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build/assets/js/'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};