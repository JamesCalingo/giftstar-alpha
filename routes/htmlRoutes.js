// var router = require("express").Router();
var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/additems", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/additems.html"));
  });

  app.get("/list/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list/:id.html"))
  })
};
