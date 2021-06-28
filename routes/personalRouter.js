const express = require('express');
const personalController = require('../app/controllers/personalController');
const personalRouter = express.Router();
const bootstrap = require('../bootstrap');
const upload = bootstrap.upload;

personalRouter.get('/', personalController.getPersonal);
personalRouter.post('/update',upload.single('currentUserAvatar'),personalController.updateCurrentUser);
personalRouter.get('/exit',personalController.exit);

module.exports = personalRouter;

