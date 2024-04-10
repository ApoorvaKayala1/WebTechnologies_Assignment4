const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
  total_amount: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
