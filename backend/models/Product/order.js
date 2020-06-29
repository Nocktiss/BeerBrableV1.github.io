
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    uuid: DataTypes.UUID,
    address: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      through: 'ProductOrders',
      as: 'products',
      foreignKey: 'orderId',
      otherKey: 'productId'
    });
  };
  return Order;
};