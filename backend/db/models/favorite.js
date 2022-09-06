'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    daycareId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, { foreignKey: 'userId'} );
    Favorite.belongsTo(models.Daycare, { foreignKey: 'daycareId'} );
  };
  return Favorite;
};
