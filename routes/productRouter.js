const express = require('express');
const productController = require('../app/controllers/productController');
const productRouter = express.Router();

productRouter.get('/', productController.getProduct);


module.exports = productRouter;