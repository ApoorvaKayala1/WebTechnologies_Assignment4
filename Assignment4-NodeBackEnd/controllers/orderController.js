const Order = require('../models/order');

// GET all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST add a new order
exports.placeOrder = async (req, res) => {
  try {
    const { user_id, product_id, quantity, total_amount } = req.body;
    const order = await Order.create({ user_id, product_id, quantity, total_amount });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// PUT update an existing order
exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, product_id, quantity, total_amount } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(id, { user_id, product_id, quantity, total_amount }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// DELETE remove an order
exports.cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
