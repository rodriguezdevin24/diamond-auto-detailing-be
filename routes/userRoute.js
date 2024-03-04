// userRoute.js 

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

//Route for registering new user 
router.post('/register', userController.createUser);

//Route for getting all users
router.get('/', userController.getUsers);

//Route for getting user by ID
router.get('/:id', userController.getUser)

//Route for updating user by ID
router.put('/:id', userController.updateUser)

//Route for deleting user by ID
router.delete('/:id', userController.deleteUser)



module.exports = router;

