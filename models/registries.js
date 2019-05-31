module.exports = function(sequelize, DataTypes) {
  var Registries = sequelize.define("registries", {
    registry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.CURRENT_DATE,
    validate: {
      len: [1]
  }
}

});

Registries.associate = function(models) {
  Registries.belongsTo(models.users);
}
  return Registries;
 };
