const express = require('express');
const personalController = require('../app/controllers/personalController');
const personalRouter = express.Router();
const bootstrap = require('../bootstrap');
const upload = bootstrap.upload;

personalRouter.get('/', personalController.getPersonal);
personalRouter.post('/updateAvatar',upload.single('currentUserAvatar'),personalController.updateUserAvatar);
personalRouter.post('/updateLogin',personalController.updateUserLogin);
personalRouter.post('/updatePassword', personalController.updateUserPassword);
personalRouter.post('/updateEmail', personalController.updateUserEmail);
personalRouter.get('/exit',personalController.exit);

module.exports = personalRouter;

