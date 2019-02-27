
const global_node_modules_path = require('get-global-node-modules-path')('umi')

const webpack = require(global_node_modules_path + '/webpack')

const nodeExternals = require('webpack-node-externals')

// for node server-side render config
// const isDev = process.env.NODE_ENV === 'development'
// webpackConfig.mode = process.env.NODE_ENV
// webpackConfig.devtool = isDev ? 'eval-source-map' : ''
// webpackConfig.target = 'node'
// webpackConfig.externals = nodeExternals({
//     whilelist: /\.(css|less|sass|scss)$/
// })
// webpackConfig.output.libraryTarget ='commonjs2'
// webpackConfig.plugins.push(new webpack.DefinePlugin({
//     __isBrowser__: false
// }))


module.exports = {
    mode: "production",
    entry: {
        app: "./src/pages/index.tsx"
    },
    target: "async-node",
    externals: nodeExternals({
        whilelist: /\.(css|less|sass|scss)$/
    }),
    output: {
        // path: paths.appBuild,
        publicPath: "/dist",
        filename: "[name].js",
        libraryTarget: "commonjs2"
    },

    plugins: [
        new webpack.DefinePlugin({
        __isBrowser__: false
        })
    ]
}