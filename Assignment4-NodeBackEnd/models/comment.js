const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true },
  image: { type: String },
  text: { type: String }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
