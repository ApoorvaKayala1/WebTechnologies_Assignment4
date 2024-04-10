const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  purchase_history: { type: String },
  shipping_address: { type: String },
  contact: { type: String },
  city: { type: String },
  province: { type: String },
  country: { type: String },
  zip_code: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
