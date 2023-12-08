const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },

    facebookId: {
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
    },

    verify: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        require: true,
        default: "User",
    },
    banEndDate: {
        type: Date,
    },

});

module.exports = mongoose.model('User', userSchema)