const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');

// GET all comments
router.get('/', CommentController.getAllComments);

// POST add a new comment
router.post('/', CommentController.addComment);

// PUT update an existing comment
router.put('/:id', CommentController.updateComment);

// DELETE remove a comment
router.delete('/:id', CommentController.deleteComment);

module.exports = router;
