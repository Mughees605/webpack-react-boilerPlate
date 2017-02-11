var webpack = require("webpack");
module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    'style!css!bootstrap/dist/css/bootstrap.css',
    "./app/app.jsx"
  ],
  externals:{
   jquery:"jQuery"
  },
  plugins:[
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: { //adding modules
      Main:'app/components/Modal.jsx',
      Cart:'app/components/Cart.jsx',
      Checkout:'app/components/Checkout.jsx',
      Product:'app/components/Product.jsx',

      applicationStyles:"app/styles/style.css"
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
