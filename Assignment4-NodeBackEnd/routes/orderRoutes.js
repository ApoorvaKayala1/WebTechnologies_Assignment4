const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

// GET all orders
router.get('/', OrderController.getAllOrders);

// POST add a new order
router.post('/', OrderController.placeOrder);

// PUT update an existing order
router.put('/:id', OrderController.updateOrder);

// DELETE remove an order
router.delete('/:id', OrderController.cancelOrder);

module.exports = router;
