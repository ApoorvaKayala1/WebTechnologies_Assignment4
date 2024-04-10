const Product = require('../models/product');

// GET operation: Retrieve data for all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET operation: Retrieve data for a specific product
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params; // Extract id from URL params
    const product = await Product.findOne({ _id: id });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// POST operation: Add a new product
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// PUT operation: Update an existing product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// DELETE operation: Remove a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
