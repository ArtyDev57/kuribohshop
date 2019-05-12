const express = require('express');

const path = require('path');

const router = express.Router();

const productController = require('../controllers/products');

router.get('/brand/:brand', productController.getProductsByBrand);

router.get('/product/:id', productController.getProduct);

module.exports = router;