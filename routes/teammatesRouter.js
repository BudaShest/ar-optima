const express = require('express');
const teammatesController = require('../app/controllers/teammatesController');
const teammateRouter = express.Router();

teammateRouter.get('/', teammatesController.getAllEmployers);

module.exports = teammateRouter;
