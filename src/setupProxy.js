const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth", {
      target: "http://ec2-15-164-183-91.ap-northeast-2.compute.amazonaws.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://ec2-15-164-183-91.ap-northeast-2.compute.amazonaws.com",
      changeOrigin: true,
    })
  );
};
