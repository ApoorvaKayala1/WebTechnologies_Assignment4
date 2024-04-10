const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);

// GET product by ID
router.get('/:id', productController.getProductById);

// POST add a new product
router.post('/', productController.addProduct);

// PUT update an existing product
router.put('/:id', productController.updateProduct);

// DELETE remove a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
