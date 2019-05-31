// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

const withAuth = require('../middleware/authentication');

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/api/products",withAuth, function(req, res) {
    req.body.userId = req.id;
    db.Products.findAll({ where: {
      userId: req.id
    }}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });


    // POST route for saving a new product
    app.post("/api/products",withAuth, function(req, res) {
      req.body.userId = req.id;
      db.Products.create(req.body).then(function(dbProducts) {
        res.json(dbProducts);
      });
    });

 };

