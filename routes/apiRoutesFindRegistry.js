var db = require("../models");

module.exports = function(app) {


  app.get("/api/registries", function(req, res) {
    req.body.userId = req.id;
    db.registries.findAll({ where: {
      email: email
    }}).then(function(dbRegistry) {
      res.json(dbRegistry);
    });
  });
}