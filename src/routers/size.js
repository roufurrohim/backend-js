const express = require('express');
const sizeController = require('../controllers/size');

const sizeRouter = express.Router();
sizeRouter.get('/size', sizeController.getList);
sizeRouter.get('/size/:id', sizeController.getDetail);
sizeRouter.post('/size', sizeController.insert);
sizeRouter.patch('/size/:id', sizeController.update);
sizeRouter.delete('/size/:id', sizeController.destroy);

module.exports = sizeRouter;
