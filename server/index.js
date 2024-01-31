// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

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
      console.log('MongoDB Connection is Success');
    });
  } catch (error) {
    console.error('MongoDB Connection:', error.message);
  }
};

database().then(() => {
  // API routes
  app.use('/api', apiRoutes);


  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
}).catch((error) => {
  console.error('Server launch error:', error.message);
});
