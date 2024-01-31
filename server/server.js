// // /server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const apiRoutes = require('./routes/apiRoutes');
// const database = require('./config/database'); 
// const app = express();
// const PORT = 5000;

// app.use(express.json()); // JSON verilerini parse etmek için middleware
// app.use('/api', apiRoutes);

// // MongoDB bağlantısı
// database().then(() => {
//   console.log('MongoDB Bağlantısı Başarılı ');
//   // Server'ı başlatma
//   app.listen(PORT, () => {
//     console.log(`Server çalışıyor: http://localhost:${PORT}`);
//   });
// }).catch((error) => {
//   console.error('MongoDB Bağlantısı Hatası:', error.message);
// });
