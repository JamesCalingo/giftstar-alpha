// import dependencies
const jwt = require('jsonwebtoken');
const {
  users: Users
} = require('../models');
const handle = require('../utils/promise-handler');

// set up secret for JWT (json web token)...typically you'd hide this in a .env
const secret = 'donttellnobody';

// create function to register/create a new user
// used when the POST route '/api/user/register' is hit
const register = (req, res) => {
  console.log(req.body);
  // get information about user out of req.body
  const {
    email,
    password,
    firstName,
    lastName
  } = req.body;
  Users.create({
      firstName,
      lastName,
      email,
      password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// function for logging in a user
// this will run when user POSTs to '/api/user/login'
const login = async (req, res) => {
  // get email and password out of req.body
  const {
    email,
    password
  } = req.body;
  console.log(req.body);
  // find user based on email
  const [findUserErr, userInfo] = await handle(Users.findOne({
    where: {
      email: email
    }
  }));
  console.log(userInfo);
  if (findUserErr) {
    console.log(findUserErr);
    res.status(500).json({
      error: 'Internal error, try again'
    });
  } else if (!userInfo) {
    res.status(401).json({
      error: 'Incorrect email'
    });
  } else {
    // check to see if password matches user's password
    const [pwErr, same] = await handle(userInfo.validPassword(password));

    if (pwErr) {
      res.status(500).json({
        error: 'Internal error please try again!'
      });
    } else if (!same) {
      res.status(401).json({
        error: 'Incorrect password!'
      });
    } else {
      // issue our JWT
      const payload = {
        id: userInfo.id,
        email: userInfo.email
      };
      // sign jwt
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      });

      // respond with web token to the front end
      res.status(200).json(token);

      // if you want to use session cookies instead...
      // res.cookie('token', token, {httpOnly: true})
    }
  }
};

// get user profile
// GET '/api/user' (this will be run through auth middleware)
const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle(Users.findOne({
    where: {
      id: req.id
    }
  }));

  if (userErr) {
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userProfile);
  }
  
};



// export our methods
module.exports = {
  getUserProfile,
  login,
  register
};