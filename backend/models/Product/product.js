'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    uuid: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.Order, {
      through: 'ProductOrders',
      as: 'orders',
      foreignKey: 'productId',
      // otherKey: 'orderId'
    });
  };
  return Product;
};