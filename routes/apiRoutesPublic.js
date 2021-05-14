var db = require("../models");

module.exports = function (app) {
  app.get("/public/users", function (req, res) {
    req.body.userId = req.id;
    db.users
      .findAll({
        // where: {
        //   userId: req.id,
        // },
      })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/public/lists", function (req, res) {
    req.body.listId = req.id;
    db.lists
      .findAll({
        // where: {
        //   userId: req.id,
        // },
      })
      .then(function (listsData) {
        res.json(listsData);
      });
  });
};
