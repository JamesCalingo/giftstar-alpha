// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const cookieParser = require('cookie-parser')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

// Static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

// Routes
// =============================================================
require("./routes/apiRoutesProducts")(app);
require("./routes/apiRoutesUsers")(app)
require("./routes/apiRoutesRegistries")(app)
require("./routes/htmlRoutes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
