const { Router } = require('express');
const { fileController } = require('../controllers');

const fileRouter = Router();

fileRouter.get('/file', fileController.getFile)
fileRouter.post('/file', fileController.getFileBlob)

module.exports = fileRouter;
