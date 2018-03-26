// give the entry point file - src/app.js
// output file and location - public/bundle.js

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('cm-styles.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test:   /\.js$/, // check to see if file ends in .js
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/, // get all the CSS/SCSS files
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap:true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap:true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // needed for client-side routing (react-router-dom)
            publicPath: '/dist/'
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    }
};