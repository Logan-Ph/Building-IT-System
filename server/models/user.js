const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    googleId: {
        type: String,
    },

    facebookId:{
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

    verify: {
        type: Boolean,
        default: false,
    },

});

module.exports = mongoose.model('User',userSchema)