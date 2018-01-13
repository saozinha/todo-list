const webpack = require('webpack')
const ExtractTextplugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename : './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: { // defini as extensoes que o react deve reconher
        extensions : ['','.js','.jsx'],
        alias: { // apelido para facilitar o acesso a pasta node_modules
            modules: __dirname + '/node_modules'
        }
    },
    plugin: [
        new ExtractTextplugin('app.css') // arquivo que sera gerado atraves do parse do css criado por nos

    ],
    module : {
        loaders : [{
            test: /.js[x]?$/, // ira parsear tanto .js quanto jsx
            loader: 'babel-loader',
            exclude: /node_modules/,
            quer: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        },
        {
            test: /\.css$/,  
            loader: ExtractTextplugin.extract('style-loader','css-loader')
        },
        {
            test: /\.woff|.woff2|.ttf|.eof|.svg*.*$/,  // tratamento das fontes de texto
            loader: 'file'    
        }
    ]
    }
}