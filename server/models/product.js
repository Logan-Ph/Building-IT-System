const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    owner: {
        type: String,
        require: true,
    },

    product_name: {
        type: String,
        require: true,
    },

    category: {
        type: String,
        require: true,
    },

    price: {
        type: Number,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },

    image_link: {
        type: String,
    },

    img: {
        data: Buffer,
        contentType: String,
    },

    ratings:{
        type:Number,
        require: true,
    },

    no_of_ratings:{
        type:Number,
        require: true,
    }
});

module.exports = mongoose.model('Product', productSchema)