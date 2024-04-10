const Cart = require('../models/cart');

// GET all cart items
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('product_id', 'name image pricing');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST add a new item to the cart
exports.addToCart = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const cartItem = await Cart.create({ user_id, product_id, quantity });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// PUT update an existing item in the cart
exports.updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const updatedCartItem = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!updatedCartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json(updatedCartItem);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// DELETE remove an item from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCartItem = await Cart.findByIdAndDelete(id);
    if (!deletedCartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json({ message: 'Cart item removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
