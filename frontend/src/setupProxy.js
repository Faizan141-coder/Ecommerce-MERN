const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
      ["/user/","/product/","/order/","/delivery/","/checkout/"],
      createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true,
      })
    );
};