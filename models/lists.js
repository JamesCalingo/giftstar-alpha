// This allows users to have multiple Lists. Currently, products are being assigned to users, but in the future, I envision having users able to have multiple Lists.

module.exports = function (sequelize, DataTypes) {
  var Lists = sequelize.define("Lists", {
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

  Lists.associate = function (models) {
    Lists.belongsTo(models.users);
    Lists.hasMany(models.products);
  };
  return Lists;
};
