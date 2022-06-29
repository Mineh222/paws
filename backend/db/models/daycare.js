'use strict';
module.exports = (sequelize, DataTypes) => {
  const Daycare = sequelize.define('Daycare', {
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    businessHours: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Daycare.associate = function(models) {
    // associations can be defined here
    Daycare.belongsTo(models.User, { foreignKey: 'ownerId' });
    Daycare.hasMany(models.Review, {foreignKey: 'daycareId'});
  };
  return Daycare;
};
