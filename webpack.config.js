const path = require("path");

module.exports = {

    entry: './client/index.js',
    devServer: {
        publicPath: '/build',
        // proxy: {'/api': 'http://localhost:3000',}
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: [/node_modules/]
            }
        ]
    }

}