const express = require("express");
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api/auth/github",
    proxy({
      target: "http://localhost:8080/",
      changeOrigin: true
    })
  );
  app.use(
    "/api/auth/github/callback",
    proxy({
      target: "http://localhost:8080/",
      changeOrigin: true
    })
  );
};
