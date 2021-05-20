var db = require("../models");

const withAuth = require("../middleware/authentication");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/products", withAuth, function (req, res) {
    req.body.listId = req.id;
    db.products
      .findAll({
        where: {
          listId: req.id,
        },
      })
      .then(function (dbProducts) {
        res.json(dbProducts);
      });
  });

  app.post("/products", withAuth, function (req, res) {
    req.body.listId = req.id;
    db.products.create(req.body).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  // UPDATE route to set "purchased" to true
  app.put("/products/:id", withAuth, function (req, res) {
    req.body.productId = req.id;
    db.products
      .update({
        where: { id: req.params.id },
      })
      .then((productData) => res.json(productData))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });

  app.delete("/products/:id", withAuth, function (req, res) {
    req.body.productId = req.id;
    db.products
      .destroy({
        where: { id: req.params.id },
      })
      .then((productData) => res.json(productData))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
};
