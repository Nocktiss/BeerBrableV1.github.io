
module.exports = app => {
app.patch('/orders/:id', (async (req, res) => {
  // Get the order from the database
  const order = await Order.findById(req.params.id);

  // Remove all current associations
  const products = await order.getProducts();
  order.removeProducts(products);

  // Loop through all the items in the request
  req.body.products.forEach((item) => {
  // We will use this dictionary to create a ProductOrder 
    const po = {
      orderId: order.id,
      productId: item.id,
      qty: item.qty
    };

    // Create and save the ProductOrder
    const savedProductOrder = ProductOrder.create(po, { w: 1 }, { returning: true });
  });
                                  
  // Update the location Property
  const updatedOrder = await Order.update({
    location: req.body.location || order.location,
  }, { where: { id: req.params.id } });

  // If everything goes well respond with the updatedOrder
  // You may also include other properties like we did in the get request
  return respondWith(res, 200, ['Updated order'], { updatedOrder });
}));
}