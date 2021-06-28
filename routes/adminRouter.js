const express = require('express');
const adminController = require('../app/controllers/adminController');
const adminRouter = express.Router();
const bootstrap = require('../bootstrap');
const upload = bootstrap.upload;
const upload2 = bootstrap.upload2;


adminRouter.get('/',adminController.getPanel);
adminRouter.post('/addEmployer',upload.single('employAvatar'),adminController.addEmployer);
adminRouter.post('/addPosition',upload.single('positionIcon'),adminController.addPosition);
adminRouter.post('/addProduct',upload.array('productImages',3),adminController.addProduct);
adminRouter.post('/addService', upload.single('serviceImage'),adminController.addService);
adminRouter.post('/moderate', adminController.moderate);
adminRouter.post('/addDemo',upload2.array('productDemoFiles',3),adminController.addDemo);
adminRouter.post('/updateWork',adminController.updateWork);


module.exports = adminRouter;