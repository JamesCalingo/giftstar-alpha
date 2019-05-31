var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {

  var Users = sequelize.define("users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      match: [/.+@.+\../, "A valid email address must be used!"]
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      
    }
  },

  );

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function(password) {
    const document = this;
    return new Promise((resolve, reject) => {
      // run bcrypt.compare method to compare incoming password (i.e. 12345) with user's hashed password (i.e. 3rueoiehw4hgoig43)
      bcrypt.compare(password, document.password, function compareCallback(err, same) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(same);
          resolve(same);
        }
      });
    });
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Users.beforeCreate(function(users) {
    users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
  });

  Users.associate = function(models) {
    Users.hasMany(models.Products);
  }

  return Users;

};






