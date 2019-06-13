
const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
};