const express = require('express');
const productController = require('../app/controllers/productController');
const productRouter = express.Router();

productRouter.get('/', productController.getProduct);
productRouter.post('/buy',productController.buy);

module.exports = productRouter;