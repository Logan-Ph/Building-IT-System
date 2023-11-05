const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    
    email: {
        type: String,
        require: false,
    },

    password: {
        type: String,
        require: true,
    },

    address: {
        type: String,
        require: true,
    },

    name: {
        type: String,
        require: true,
    },

    phone_number: {
        type: String,
    },

    img: {
        data: Buffer,
        contentType: String,
    },
});

module.exports = mongoose.model('User',userSchema)