const mongoose = require('mongoose');

const database = async () => {
    try {
        // MongoDB Atlas bağlantı URL'si
        const MONGO_URI = 'mongodb+srv://demireren57:_jBCk6vPiPJU.M!@socialmedia.gjtwpy7.mongodb.net/';

        // mongoose.connect fonksiyonunu kullanarak MongoDB'ye bağlan
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Bağlantısı Başarılı');
    } catch (error) {
        console.error('MongoDB Bağlantısı Hatası:', error.message);
    }
};

module.exports = database
