var db = require("../models");

module.exports = function(app) {


  app.get("/api/products", function(req, res) {
    req.body.userId = req.id;
    db.Products.findAll({ where: {
      email: email
    }}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
}