const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const database = require('./config/database');
dotenv.config();
;
const app = express();
app.use(cors());

const PORT = 5000;

database();

app.listen(PORT, () => (
    console.log("server running", PORT)
))
