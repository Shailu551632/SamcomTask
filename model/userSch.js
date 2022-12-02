const mongoose = require('mongoose');

const userSchama = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    userImage: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    active:{
        type: Boolean
    }
})


const User = mongoose.model('user', userSchama);
module.exports = User;