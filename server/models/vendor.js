const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },

    businessName: {
        type: String,
        require: true,
    },

    address: {
        type: String,
        require: true,
    },

    phoneNumber: {
        type: String,
    },

    img: {
        data: Buffer,
        contentType: String,
    },
});

module.exports = mongoose.model('Vendor', vendorSchema)