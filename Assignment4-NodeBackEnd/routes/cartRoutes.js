const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

// GET all cart items
router.get('/', CartController.getAllCartItems);

// POST add a new item to the cart
router.post('/', CartController.addToCart);

// PUT update an existing item in the cart
router.put('/:id', CartController.updateCartItem);

// DELETE remove an item from the cart
router.delete('/:id', CartController.removeFromCart);

module.exports = router;
