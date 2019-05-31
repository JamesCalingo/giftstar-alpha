// var router = require("express").Router();
var path = require("path");

module.exports = function(app){

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

app.get("/findRegistry", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/findRegistry.html"))
});

app.get("/login", function(req, res){
  res.sendFile(path.join(__dirname, "../public/registryLogin.html"))
});

app.get("/additems", function(req, res){
  res.sendFile(path.join(__dirname, "../public/addItems.html"))
});
};
