require('dotenv').config();
const express = require('express');
const app = express();
const conn = require('./config/db');
const router = require('./controller/userReg');


app.use(express.json());
app.use(router);
const port = process.env.port

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
})