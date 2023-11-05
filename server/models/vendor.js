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

    bussiness_name: {
        type: String,
        require: true,
    },

    bussiness_address: {
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

module.exports = mongoose.model('Vendor', vendorSchema)