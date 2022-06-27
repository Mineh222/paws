'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Daycare, {foreignKey: 'daycareId'});
    Review.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Review;
};
