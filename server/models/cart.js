const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        }
    }],
});

cartSchema.methods.addProduct = function (product, quantity) {
    const productIndex = this.products.findIndex(p => {
        return p.product._id.equals(product._id);
    });
    const parsedQuantity = Number(quantity);
    if (productIndex >= 0) {
        // product exists in cart, update quantity
        this.products[productIndex].quantity += parsedQuantity;
    } else {
        // new product, add to cart    
        this.products.push({ product, parsedQuantity });
    }

    return this.save();
}

cartSchema.methods.getTotalProducts = function () {
    return this.products.reduce((total, p) => {
        return total + p.quantity;
    }, 0);
}


module.exports = mongoose.model('Cart', cartSchema);