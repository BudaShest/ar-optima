const express = require('express');
const adminController = require('../app/controllers/adminController');
const adminRouter = express.Router();

adminRouter.get('/',adminController.getPanel);
adminRouter.post('/addEmployer',adminController.addEmployer);

module.exports = adminRouter;