module.exports = app => {
app.delete('/orders/:id', (async (req, res) => {
  // Get the order from the database
  const order = await Order.findById(req.params.id);

  // Find and remove all associations 
  const products = await order.getProducts();
  order.removeProducts(products);

  // Delete order
  const deletedOrder = await Order.destroy({
    where: {
      id: req.params.id,
    },
  });
  
  // If everything goes well respond with the deletedOrder
  return respondWith(res, 200, ['Order deleted successfully'], { deletedOrder });
}));
}