const express = require('express');
const adminController = require('../app/controllers/adminController');
const adminRouter = express.Router();

/* TODO вынести*/
const app = express();
const multer = require('multer');
app.use(express.static(__dirname));

const storage = multer.diskStorage({
    destination: 'public/img/uploads',
    filename: function (req, file,callback){
        callback(null,Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage:storage})
/* ------*/


const demoStorage = multer.diskStorage({
    destination:'public/3d',
    filename:function (req,file,callback){
        callback(null,file.originalname);
    }
})
const upload2 = multer({storage:demoStorage});

adminRouter.get('/',adminController.getPanel);
adminRouter.post('/addEmployer',upload.single('employAvatar'),adminController.addEmployer);
adminRouter.post('/addPosition',upload.single('positionIcon'),adminController.addPosition);
adminRouter.post('/addProduct',upload.array('productImages',3),adminController.addProduct);
adminRouter.post('/addService', upload.single('serviceImage'),adminController.addService);
adminRouter.post('/moderate', adminController.moderate);
adminRouter.post('/addDemo',upload2.array('productDemoFiles',3),adminController.addDemo);


module.exports = adminRouter;