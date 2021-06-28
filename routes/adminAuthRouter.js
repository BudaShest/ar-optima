const express = require('express');
const adminAuthController = require('../app/controllers/adminAuthController');
const adminAuthRouter = express.Router();

adminAuthRouter.get('/',adminAuthController.getForm);
adminAuthRouter.post('/adminAuth', adminAuthController.adminAuth);

module.exports = adminAuthRouter;
