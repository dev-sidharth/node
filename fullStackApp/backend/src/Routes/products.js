const express = require('express');
const routes = express.Router();
const { addProduct, getProducts, getProductDetails, editProduct, deleteProduct } = require('../controllers/productsController')

routes.post('/admin/addProduct', addProduct);
routes.get('/products', getProducts);
routes.get('/product/:id', getProductDetails);
routes.put('/admin/editProduct/:id', editProduct)
routes.delete('/admin/deleteProduct/:id', deleteProduct);

module.exports = routes;