const express = require('express');
const categoryController = require('../controllers/category');
const midAuth = require('../middleWare/authentic');

const categoryRouter = express.Router();
categoryRouter.get('/category', midAuth, categoryController.getList);
categoryRouter.get('/category/:id', midAuth, categoryController.getDetail);
categoryRouter.post('/category', midAuth, categoryController.insert);
categoryRouter.patch('/category/:id', midAuth, categoryController.update);
categoryRouter.delete('/category/:id', midAuth, categoryController.destroy);

module.exports = categoryRouter;
