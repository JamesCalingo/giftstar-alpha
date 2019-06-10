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
    req.body.registryId = req.id;
    db.products.findAll({ where: {
      registryId: req.id
    }}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });


    // POST route for saving a new product
    app.post("/api/products",withAuth, function(req, res) {
      req.body.registryId = req.id;
      db.products.create(req.body).then(function(dbProducts) {
        res.json(dbProducts);
      });
    });


    // UPDATE route to set "purchased" to true
    app.put("/api/products",withAuth, function(req, res) {
      req.body.productId = req.id;
      db.products.update({
      where: {id: req.params.id}
    })
      .then(productData => res.json(productData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
    
 };

