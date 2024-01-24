const User = require('../models/user.js');

// Yeni bir kullanıcı eklemek
exports.createUser = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    res.status(201).json({ message: 'Kullanıcı oluşturuldu' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
