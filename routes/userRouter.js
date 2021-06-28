const express = require('express');
const userController = require('../app/controllers/userController');
const userRouter = express.Router();

userRouter.get('/exit', userController.exit);

module.exports = userRouter;