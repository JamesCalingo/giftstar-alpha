const withAuth = require('../middleware/authentication');
const { getUserProfile, register, login } = require('../controllers/user-controller');

module.exports = (app) =>{
 // USER ROUTES
  // API Route to see users
  app.get("/api/users", withAuth, getUserProfile);
// API Route to create new user (pre password)
  app.post("/api/users/register", register);

  app.post("/api/users/login", login);
}