const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 1. This is the main JavaScript file where Webpack starts bundling
    entry: './src/index.js',
    mode: 'development',

    // 2. This is where Webpack will output the final bundled files
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // This cleans the 'dist' folder before each build
    },

    // 3. Plugins help Webpack do extra tasks, like handling HTML files
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html', // Use this HTML file as a template
        }),
    ],

    // 4. Configuration for the development server
    devServer: {
        static: './dist',
    },
};