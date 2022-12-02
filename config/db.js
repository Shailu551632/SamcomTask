require('dotenv').config();
const mongoose = require('mongoose');

const mongoDB = process.env.mongoDB;

mongoose.connect(mongoDB, {

}).then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(`Databae Error ${err}`);
})
