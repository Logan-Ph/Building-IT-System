const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
    },

    googleId: {
        type: String,
    },

    facebookId:{
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String,
    },
    name: {
        type: String,
    },
    streetAddress: {
        type: String,
    },
    
    ward: {
        type: String,
    },
    district: {
    type: String,

    },
    city: {
        type: String,
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

    remembered: {
        type: Boolean,
    }

});


module.exports = mongoose.model('User',userSchema)