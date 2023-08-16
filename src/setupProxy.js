// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/opn_category.php',
    createProxyMiddleware({
      target: 'https://vla.levnext.com/ims/api',
      changeOrigin: true,
    })
  );
};
