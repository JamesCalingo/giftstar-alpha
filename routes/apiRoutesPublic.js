var db = require('../models')

module.exports = function (app) {
  app.get('/api/users/public', function (req, res) {
    req.body.userId = req.id
    db.registries.findAll({
      where: {
        userId: req.id
      }
    }).then(function (dbUsers) {
      res.json(dbUsers)
    })
  })
}
