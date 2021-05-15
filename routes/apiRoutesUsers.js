const withAuth = require("../middleware/authentication");
const {
  getUserProfile,
  register,
  login,
} = require("../controllers/user-controller");

module.exports = (app) => {
  // USER ROUTES
  // API Route to see users
  app.get("/users", withAuth, getUserProfile);
  // API Route to create new user (pre password)
  app.post("/users/register", register);
  // login user to system
  app.post("/users/login", login);
};
