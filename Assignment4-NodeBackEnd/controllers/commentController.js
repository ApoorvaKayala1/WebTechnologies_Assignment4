const Comment = require('../models/comment');

// GET all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST add a new comment
exports.addComment = async (req, res) => {
  try {
    const { product_id, user_id, rating, image, text } = req.body;
    const comment = await Comment.create({ product_id, user_id, rating, image, text });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// PUT update an existing comment
exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_id, user_id, rating, image, text } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(id, { product_id, user_id, rating, image, text }, { new: true });
    if (!updatedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// DELETE remove a comment
exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
