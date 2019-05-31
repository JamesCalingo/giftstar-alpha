const jwt = require('jsonwebtoken');

const secret = 'donttellnobody';

const withAuth = (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.headers.authorization ||
    req.cookies.token;

  // req.headers.authorization => "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Q5OTRiNjQwNTc3ZTRlN2Y4MzM3NzgiLCJlbWFpbCI6ImFsZXgucm9zZW5rcmFuekBnbWFpbC5jb20iLCJpYXQiOjE1NTc3NjMzMzEsImV4cCI6MTU1Nzc2NjkzMX0.mwk49_vIK38YKZ8mZsZOq9joF8ubtbUwRPUz8T0mRVA"

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token
      .split(' ')
      .pop()
      .trim();
  }

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized: Invalid token'
        });
      } else {
        req.email = decoded.email;
        req.id = decoded.id;
        next();
      }
    });
  }
};

module.exports = withAuth;