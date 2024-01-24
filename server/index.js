const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = async () => {
  try {
    await mongoose.connection.once('open', () => {
      console.log('MongoDB Bağlantısı Başarılı');
    });
  } catch (error) {
    console.error('MongoDB Bağlantısı Hatası:', error.message);
  }
};

database().then(() => {
  // Kullanıcı oluşturma endpoint'i
  app.post('/users', userController.createUser);

  // Hello endpoint'i
  app.get('/hello', (req, res) => {
    // Kullanıcı oluşturma işlemleri burada olabilir
    // Hello mesajını geri döndür
    res.status(200).json({ message: 'Hello from the /hello endpoint!' });
  });

  // Başlangıç sayfası
  app.get('/', (req, res) => {
    res.send('Merhaba, Dünya!');
  });

  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
}).catch((error) => {
  console.error('MongoDB Bağlantısı Hatası:', error.message);
});
