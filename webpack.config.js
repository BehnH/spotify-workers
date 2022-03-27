const path = require('path');

module.exports = {
    mode: 'none',
    target: 'webworker',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'worker.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
            },
        ],
    },
};
