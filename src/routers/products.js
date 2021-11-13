const express = require('express');
const productsController = require('../controllers/products');
const midAuth = require('../middleWare/authentic');

const productsRouter = express.Router();
productsRouter.get('/products', midAuth, productsController.getList);
productsRouter.get('/products/:id', midAuth, productsController.getDetail);
productsRouter.post('/products', midAuth, productsController.insert);
productsRouter.patch('/products/:id', midAuth, productsController.update);
productsRouter.delete('/products/:id', midAuth, productsController.destroy);

module.exports = productsRouter;
