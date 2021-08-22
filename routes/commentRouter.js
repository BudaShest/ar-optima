const express = require('express');
const commentController = require('../app/controllers/commentController');
const commentRouter = express.Router();

commentRouter.post('/addComment', commentController.addComment);

module.exports = commentRouter;