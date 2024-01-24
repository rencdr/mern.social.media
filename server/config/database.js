const mongoose = require('mongoose');

const database = async () => {
    try {
       
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Bağlantısı Başarılı');
    } catch (error) {
        console.error('MongoDB Bağlantısı Hatası:', error.message);
    }
};

module.exports = database
