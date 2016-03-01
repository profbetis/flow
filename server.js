var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var mocks = require('./test/backend/server.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/api/*': {
      target: 'http://localhost:'+config.devPort,
      secure: false,
      rewrite: function(req) {
        req.url = req.url.replace(/^\/api/, '');
      }
    }
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

mocks.backend(config.devPort);
