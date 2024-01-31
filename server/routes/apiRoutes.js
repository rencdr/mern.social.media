const express = require('express');
const app = express();
const userController = require('../controllers/userController');

app.post('/users', userController.createUser);


app.get('/', (req, res) => {
  res.send('Merhaba, Dünya!');
});

app.listen(5000);

