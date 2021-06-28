const express = require('express');
const authController = require('../app/controllers/authController');
const authRouter = express.Router();
const bootstrap = require('../bootstrap');
const upload = bootstrap.upload;

authRouter.get('/', authController.getForm);
authRouter.post('/register',upload.single('regAvatar'),authController.register);
authRouter.post('/login', authController.login);

module.exports = authRouter;