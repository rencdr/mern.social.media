const bcrypt = require('bcrypt');
const User = require('../models/user.js');


exports.createUser = async (req, res) => {
  try {
    // bcrypt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword, 
    });

    await newUser.save();
    res.status(201).json({ message: 'Kullanıcı oluşturuldu' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Kullanıcı bulunamadı' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Hatalı şifre' });
    }

    res.status(200).json({ message: 'Giriş başarılı', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

