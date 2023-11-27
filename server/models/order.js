const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Products: [{
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        Quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        Price: {
            type: Number,
            require: true,
          }
    }],
      UserId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true,
      },
    //   VendorID: {
    //     type: String,
    //     require: true,
    //     ref: "Vendor",
    //   },
      ProductName: {
        type: String,
        require: true,
      },
      Date: {
            type: Date,
            default: Date.now()
        }
    });

module.exports = mongoose.model('Order', orderSchema)