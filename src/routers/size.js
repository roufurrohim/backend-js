const express = require('express');
const sizeController = require('../controllers/size');

const sizeRouter = express.Router();
sizeRouter.get('/products', sizeController.getList);
sizeRouter.get('/products/:id', sizeController.getDetail);
sizeRouter.post('/products', sizeController.insert);
sizeRouter.patch('/products/:id', sizeController.update);
sizeRouter.delete('/products/:id', sizeController.destroy);

module.exports = sizeRouter;
