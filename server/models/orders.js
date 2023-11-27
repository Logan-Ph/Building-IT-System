const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
        },
        quantity: {
            type: Number,
            required: true
        },
        
    }],
        user: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now()
        }
    });

    module.exports = mongoose.model('Order', orderSchema)