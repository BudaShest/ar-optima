const express = require('express');
const adminController = require('../app/controllers/adminController');
const adminRouter = express.Router();

const app = express();
const multer = require('multer');
app.use(express.static(__dirname));
const upload = multer({dest:'uploads'});



adminRouter.get('/',adminController.getPanel);
adminRouter.post('/add',upload.single('employAvatar'),adminController.addEmployer);

module.exports = adminRouter;