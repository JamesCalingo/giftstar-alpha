var db = require("../models");

const withAuth = require("../middleware/authentication");

module.exports = function (app) {
  app.get("/api/lists", withAuth, function (req, res) {
    req.body.userId = req.id;
    db.lists
      .findAll({
        where: {
          userId: req.id,
        },
      })
      .then(function (dbLists) {
        res.json(dbLists);
      });
  });

  app.post("/api/lists", withAuth, function (req, res) {
    req.body.userId = req.id;
    db.lists.create(req.body).then(function (dbLists) {
      res.json(dbLists);
    });
  });
};
