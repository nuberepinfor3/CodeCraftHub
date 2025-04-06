const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

//router.post('/register', registerUser);
//router.post('/login', loginUser);

// Add more routes for getting user, updating user, etc.
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:username', userController.updateUserProfile);


module.exports = router;