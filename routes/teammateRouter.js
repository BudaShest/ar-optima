const express = require('express');
const teammateController = require('../app/controllers/teammateController');
const teammateRouter = express.Router();

teammateRouter.get('/',teammateController.getTeammate);

module.exports = teammateRouter;