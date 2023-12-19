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
    },

    coverPhoto: {
        data: Buffer,
    },

    bigBanner: {
        data: Buffer,
    },

    smallBanner1: {
        data: Buffer,
    },

    smallBanner2: {
        data: Buffer,
    },

    verify: {
        type: Boolean,
        default: false,
    },

    role: {
        type: String,
        require: true,
        default: "Vendor",
    },
    banEndDate: {
        type: Date,
    },
    banStartDate: {
        type: Date,
    },
});

module.exports = mongoose.model('Vendor', vendorSchema)