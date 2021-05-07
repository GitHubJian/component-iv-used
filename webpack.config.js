const root = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const [isProd] = [NODE_ENV === 'production'];

const {VueLoaderPlugin} = require('vue-loader');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano').default;

module.exports = {
    target: 'web',
    mode: NODE_ENV,
    entry: path.resolve(root, './example/main.ts'),
    output: {
        path: path.resolve(root, 'dist'),
        filename: `js/[name]${isProd ? '.[contenthash]' : ''}.js`,
        publicPath: '/',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js', '.json', '.jsx'],
        alias: {
            '@': path.resolve(root, './src'),
            vue$: 'vue/dist/vue.runtime.esm.js',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false,
                                        useBuiltIns: 'entry',
                                        corejs: {
                                            version: 3,
                                            proposals: true,
                                        },
                                        shippedProposals: true,
                                        targets: {
                                            browsers: [
                                                '> 1%',
                                                'Android >= 4.0',
                                                'last 20 versions',
                                                'ios >= 6.0',
                                                'not ie <= 10',
                                            ],
                                        },
                                    },
                                ],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false,
                                        useBuiltIns: 'entry',
                                        corejs: {
                                            version: 3,
                                            proposals: true,
                                        },
                                        shippedProposals: true,
                                        targets: {
                                            browsers: [
                                                '> 1%',
                                                'Android >= 4.0',
                                                'last 20 versions',
                                                'ios >= 6.0',
                                                'not ie <= 10',
                                            ],
                                        },
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: ['\\.vue$'],
                            happyPackMode: isProd,
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.scss/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(root, 'public/index.html'),
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name]${isProd ? '.[contenthash]' : ''}.css`,
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g, // 正则表达式，用于匹配需要优化或者压缩的资源名
            cssProcessor: cssnano, // 压缩和优化 CSS 的处理器
            cssProcessorPluginOptions: {
                preset: [
                    'default',
                    {
                        discardComments: {
                            removeAll: true,
                        },
                    },
                ],
            },
            canPrint: true, // 在 console 中打印信息
        }),
    ],
    devServer: {
        contentBase: path.resolve(root, 'dist'),
        port: 8421,
    },
};
