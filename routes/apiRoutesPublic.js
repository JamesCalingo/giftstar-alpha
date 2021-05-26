var db = require("../models");

module.exports = function (app) {
  // Public User Routes
  app.get("/public/users", function (req, res) {
    req.body.userId = req.id;
    db.users
      .findAll()
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/public/users/:id", function (req, res) {
    req.body.userId = req.id;
    db.users
      .findOne({
        where: {
          userId: req.id,
        },
      })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });


  // Public List Routes
  app.get("/public/lists", function (req, res) {
    req.body.listId = req.id;
    db.lists
      .findAll({
        // where: {
        //   userId: req.id,
        // },
      })
      .then(function (dbLists) {
        res.json(dbLists);
      });
  });
  app.get("public/lists/:id", function (req, res) {
    req.body.listId = req.id;
    db.lists
      .findOne({
        where: {
          listId: req.id,
        },
      })
      .then(function (dbLists) {
        res.json(dbLists);
      });
  });


  app.get("/public/products/", function (req, res) {
    req.body.listId = req.id;
    db.products
      .findAll({
        // where: {
        //   listId: req.id,
        // },
      })
      .then(function (dbProducts) {
        res.json(dbProducts);
      });
  });
  };

