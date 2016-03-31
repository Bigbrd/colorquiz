require('babel-polyfill');
var fs = require('fs');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//each require is now separate css output bundle files
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var mainPath = path.resolve(__dirname, 'src', 'main.js');
var publicPath = path.resolve(__dirname, 'public');

//webpack related configuration
var config = {
    devtool: 'cheap-module-eval-source-map', //this is only for DEV for debugging
    entry: {
        main: [
            //configuration for babel6
            'babel-polyfill',
            'webpack-hot-middleware/client?http://localhost:9000/__webpack_hmr',
            // single entry point below. can do multiple entry bundles too
            './src/js/main.js'
        ]
        // can also declare other sources here for entrances
    },
    output: {
        //put the output file all packaged in /public in one file
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    //modules are the plugins to use for the task
    //preLoaders are es6
    module: {
        preLoaders: [{
            test: /\.jsx$|\.js$/,
            loader: 'eslint-loader',
            include: __dirname + '/src/'
        }],
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, 'src'),
            loader: "babel-loader",
            exclude: [nodeModulesPath]
        },
        {
            test: /\.scss$/,
            include: path.join(__dirname, 'src'),
            loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader?browsers=last 2 version!sass')
        }]
    },
    //plugins are from npm 
    plugins: [
        //uglifyjs minimizes all js output
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //defines free variables
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true
        }),
        //only in dev mode, hot update chunks
        new webpack.HotModuleReplacementPlugin(),
        //when errors compiling no assets are emitted
        new webpack.NoErrorsPlugin(),
        new ProgressPlugin(function(percentage, msg) {
            if((percentage * 100) % 20 === 0 ){
                console.info((percentage * 100) + '%', msg);
            }
        }),
        new ExtractTextPlugin('[name].css')
    ],
    //resolve option tells webpack which extensions it needs to support
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ["", ".js", ".jsx"],
    }
}

module.exports = config;