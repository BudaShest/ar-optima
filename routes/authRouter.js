const express = require('express');
const authController = require('../app/controllers/authController');
const authRouter = express.Router();

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
/*--------------*/

authRouter.get('/', authController.getForm);
authRouter.post('/register',upload.single('regAvatar'),authController.register);
authRouter.post('/login', authController.login);

module.exports = authRouter;