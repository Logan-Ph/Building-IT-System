const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
    email: {
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

    verify: {
        type: Boolean,
        default: false,
    },

    role: {
        type: String,
        require: true,
        default: "Vendor",
    }
});

module.exports = mongoose.model('Vendor', vendorSchema)