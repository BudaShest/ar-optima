const express = require('express');
const serviceController = require('../app/controllers/serviceController');
const serviceRouter = express.Router();

serviceRouter.get('/',serviceController.getService);

module.exports = serviceRouter;