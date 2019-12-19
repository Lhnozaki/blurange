const express = require("express");
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api/auth/github",
    proxy({
      target: `${process.env.REACT_APP_BACKEND_PROXY}`,
      changeOrigin: true
    })
  );
  app.use(
    "/api/auth/github/callback",
    proxy({
      target: `${process.env.REACT_APP_BACKEND_PROXY}`,
      changeOrigin: true
    })
  );
  app.use(
    "/api/auth/github/account",
    proxy({
      target: `${process.env.REACT_APP_BACKEND_PROXY}`,
      changeOrigin: true
    })
  );
  app.use(
    "/api/auth/linkedin",
    proxy({
      target: `${process.env.REACT_APP_BACKEND_PROXY}`,
      changeOrigin: true
    })
  );
  app.use(
    "/api/auth/linkedin/callback",
    proxy({
      target: `${process.env.REACT_APP_BACKEND_PROXY}`,
      changeOrigin: true
    })
  );
};
