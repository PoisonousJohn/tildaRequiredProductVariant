var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (function (options) {

    return {
        entry: [__dirname + "/src/index.ts", __dirname + "/src/index.css"],
        mode: 'production',
        externals: {
            'jquery': 'jQuery'
        },

        output: {
            path: __dirname + "/dist",
            filename: "lib.js",
            library: "RequiredProductVariant"
        },

        devtool: 'source-map',

        module: {
            "rules": [
                {
                    test: /\.css$/i,
                    "exclude": /node_modules/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    "test": /\.tsx?$/,
                    "exclude": /node_modules/,
                    "use": {
                        "loader": "ts-loader",
                        "options": {
                            "transpileOnly": true
                        }
                    }
                }
            ]
        },

        plugins: [
            new MiniCssExtractPlugin()
        ],

        resolve: {
            extensions: ['.ts', '.js', '.json']
        }


    };
})();
