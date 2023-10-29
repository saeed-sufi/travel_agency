const path = require('path')
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  mode: "development",
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, './app')
  },
  // We don't need this anymore because the devServer package is going to take care of watching our file changes.
  // watch: true, 
  devServer: {
    watchFiles:["app/**/*.html"],
    static: {
      directory: path.join(__dirname, "app"),
      watch: false
    },
    hot: true,
    port: 3000,
    // liveReload: false
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader', options: {
            postcssOptions: {
          plugins: postCSSPlugins
        }}}]
      }
    ]
  }
}