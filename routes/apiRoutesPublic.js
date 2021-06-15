var db = require("../models");

module.exports = function (app) {
  // Public User Routes
  app.get("/view/users", function (req, res) {
    req.body.userId = req.id;
    db.users
      .findAll()
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/view/users/:id", function (req, res) {
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
  app.get("/view/lists", function (req, res) {
    req.body.listId = req.id;
    db.lists
      .findAll()
      .then(function (dbLists) {
        res.json(dbLists);
      });
  });
  app.get("view/lists/:id", function (req, res) {
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

// Public product routes
  app.get("/view/products/", function (req, res) {
    req.body.listId = req.id;
    db.products
      .findAll()
      .then(function (dbProducts) {
        res.json(dbProducts);
      });
  });

  app.get("/view/products/:id", function (req, res) {
    req.body.productId = req.id;
    db.products
      .findAll({
        where: {
          productId: req.id,
        },
      })
      .then(function (dbProducts) {
        res.json(dbProducts);
      });
  });
  };