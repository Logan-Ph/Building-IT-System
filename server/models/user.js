const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },

    facebookId:{
        type: String,
    },

    username: {
        type: String,
    },
    
    email: {
        type: String,
    },

    password: {
        type: String,
    },

    address: {
        type: String,
    },

    name: {
        type: String,
    },

    phoneNumber: {
        type: String,
    },

    img: {
        data: Buffer,
        contentType: String,
    },
});

module.exports = mongoose.model('User',userSchema)