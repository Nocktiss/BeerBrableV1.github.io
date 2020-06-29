

module.exports = app => {
app.get('/orders/', (async (req, res) => {

  // Get all orders
  const allOrders = await Order.findAll({

    // Make sure to include the products
    include: [{
      model: Product,
      as: 'products',
      required: false,
      // Pass in the Product attributes that you want to retrieve
      attributes: ['id', 'name'],
      through: {
        // This block of code allows you to retrieve the properties of the join table
        model: ProductOrder,
        as: 'productOrders',
        attributes: ['qty'],
      }
    }]
  });

  // If everything goes well respond with the orders
  return respondWith(res, 200, ['Returning all orders'], {allOrders});
}));
}