module.exports = function (sequelize, DataTypes) {
  var Products = sequelize.define("products", {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    productLink: {
      type: DataTypes.STRING,
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  Products.associate = function (models) {
    Products.belongsTo(models.lists);
  };
  return Products;
};
