const Order = require('../../models/Product/order')(sequelize, DataTypes);
const Product = require('../../models/Product/product')(sequelize, DataTypes);
const ProductOrder = require('../../models/Product/productOrder')(sequelize, DataTypes);

module.exports = app => {
  app.post('/orders/create', (async (req, res) => {

    try {
      // Create and save the order
      const savedOrder = await Order.create(req.body, { w: 1 }, { returning: true });

      // Loop through all the items in req.products
      req.body.products.forEach((item) => {

        // Search for the product with the givenId and make sure it exists. If it doesn't, respond with status 400.
        const product = Product.findById(item.id);
        if (!product) {
          return res.status(400);
        }

        // Create a dictionary with which to create the ProductOrder
        const po = {
          orderId: savedOrder.id,
          productId: item.id,
          qty: item.qty,
        }

        // Create and save a productOrder
        const savedProductOrder = ProductOrder.create(po, { w: 1 }, { returning: true });
      });

      // If everything goes well, respond with the order
      return res.status(200).json(savedOrder)
    }
    catch (error) {
      console.error("Order creation server error: ", error);
      res.status(500).send(error)
    };
  }));
}