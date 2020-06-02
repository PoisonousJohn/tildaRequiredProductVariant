var webpack = require('webpack');
var path = require('path');

module.exports = (function (options) {

    return {
        entry: __dirname + "/src/index.ts",
        mode: 'production',
        externals: {
            'jquery': 'jQuery'
        },

        output: {
            path: __dirname + "/dist",
            filename: "lib.js",
            library: "lib"
        },

        devtool: 'source-map',

        module: {
            "rules": [
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

        plugins: [],

        resolve: {
            extensions: ['.ts', '.js', '.json']
        }


    };
})();
