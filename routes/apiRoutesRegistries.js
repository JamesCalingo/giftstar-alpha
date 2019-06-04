var db = require("../models");

const withAuth = require('../middleware/authentication');

module.exports = function(app) {


  app.get("/api/registries",withAuth, function(req, res) {
    req.body.userId = req.id;
    db.registries.findAll({ where: {
      registryId: req.id
    }}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  app.post("/api/registries",withAuth, function(req, res) {
    req.body.userId = req.id;
    db.registries.create(req.body).then(function(dbRegistries) {
      res.json(dbRegistries);
    });
  });
}