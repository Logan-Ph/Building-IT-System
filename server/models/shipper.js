const mongoose = require('mongoose')

const shipperSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
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

    phoneNumber: {
        type: String,
    },

    distributionHub: {
        type: String,
    },

    img: {
        data: Buffer,
        contentType: String,
    },
});

module.exports = mongoose.model('Shipper', shipperSchema)