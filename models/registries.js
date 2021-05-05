// This allows users to have multiple registries. Currently, products are being assigned to users, but in the future, I envision having users able to have multiple registries.

module.exports = function (sequelize, DataTypes) {
  var Registries = sequelize.define("registries", {
    registry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 280],
      },
    },
  });

  Registries.associate = function (models) {
    Registries.belongsTo(models.users);
    Registries.hasMany(models.products);
  };
  return Registries;
};
