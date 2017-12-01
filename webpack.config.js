var webpack = require('webpack');

 
module.exports = {
  entry: './app/app.js',
  output: { 
  path: __dirname, 
  filename: 'bundle.js' 
  },

  target: 'electron-renderer',
 
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'electron']
        }
      },
	  {
       test: /\.(?:png|jpg|svg)$/,
       loader: 'url-loader',
       query: {
         // Inline images smaller than 10kb as data URIs
         limit: 10000
       }
	  }, 
 	  {
 	     test: /\.scss$/,
 	     loader: 'style-loader!css-loader!sass-loader'
 	  }
  	]
  },

};