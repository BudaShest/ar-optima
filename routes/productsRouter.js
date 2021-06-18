const express = require('express');
const productsController = require('../app/controllers/productsController');
const productsRouter = express.Router();

productsRouter.get('/',productsController.getAllProducts);

module.exports = productsRouter;