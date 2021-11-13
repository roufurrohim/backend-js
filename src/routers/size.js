const express = require('express');
const sizeController = require('../controllers/size');
const midAuth = require('../middleWare/authentic');

const sizeRouter = express.Router();
sizeRouter.get('/size', midAuth, sizeController.getList);
sizeRouter.get('/size/:id', midAuth, sizeController.getDetail);
sizeRouter.post('/size', midAuth, sizeController.insert);
sizeRouter.patch('/size/:id', midAuth, sizeController.update);
sizeRouter.delete('/size/:id', midAuth, sizeController.destroy);

module.exports = sizeRouter;
