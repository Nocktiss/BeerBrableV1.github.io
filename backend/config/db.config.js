const env = require('./env.js');

import Sequelize from 'sequelize';
import UserModel from '../models/Auth/user';
import ProductModel from '../models/Product/product';
import OrderModel from '../models/Product/order';
import ProductOrderModel from '../models/Product/productOrder';

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
});

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize)
const Order = OrderModel(sequelize, Sequelize)
const ProductOrder = ProductOrderModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('All table have been created');
}).catch((error)=> console.log(error));

module.exports = User, Product, Order, ProductOrder;
