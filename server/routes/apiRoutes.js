// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

router.post('/register', userController.createUser);

router.post('/login', userController.login);

router.post('/post', postController.createPost);

router.get('/displayPosts', postController.displayPosts);

router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from the /hello endpoint!' });
});

module.exports = router;
