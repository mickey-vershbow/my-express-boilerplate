const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

const authorization = require('../utils/authorization');

router.get('/new', userController.new);

router.post('/signup', userController.signUp);

router.get('/signin', userController.signIn);

router.get('/signout', userController.signOut);

router.post('/login', userController.login);

router.get('/profile', authorization.isAuthenticated, userController.profile);

module.exports = router;
