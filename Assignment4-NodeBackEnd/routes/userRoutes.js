const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// GET all users
router.get('/', UserController.getAllUsers);

// GET user by ID
router.get('/:id', UserController.getUserById);

// POST add a new user
router.post('/', UserController.createUser);

// PUT update an existing user
router.put('/:id', UserController.updateUser);

// DELETE remove a user
router.delete('/:id', UserController.deleteUser);

module.exports = router;
