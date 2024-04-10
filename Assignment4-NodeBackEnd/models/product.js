const mongoose = require('mongoose');

// Define Product schema
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  pricing: {
    type: Number,
    required: true
  },
  shipping_cost: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

// Create Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
