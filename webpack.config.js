'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/dist'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};

