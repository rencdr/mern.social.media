const bcrypt = require('bcrypt');
const User = require('../models/user.js');

// Yeni bir kullanıcı eklemek
exports.createUser = async (req, res) => {
  try {
    // Kullanıcının şifresini bcrypt kullanarak şifrele
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword, // Şifreyi hashlenmiş şifre ile değiştir
    });

    await newUser.save();
    res.status(201).json({ message: 'Kullanıcı oluşturuldu' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
