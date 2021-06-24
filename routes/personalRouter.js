const express = require('express');
const personalController = require('../app/controllers/personalController');
const personalRouter = express.Router();

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

personalRouter.get('/', personalController.getPersonal);
personalRouter.post('/update',upload.single('currentUserAvatar'),personalController.updateCurrentUser);

module.exports = personalRouter;

