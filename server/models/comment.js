const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    commentText: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        default: Date.now
    },
    replyMessage: [{
        commentId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        reply: {
        type: String,
        required: true
        },
        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor',
            required: true,
        },
        postedOn: {
            type: Date,
            default: Date.now
        },
    }],
    like:[{
        likes:{
            type: Number,
            default: 0,
        },
        likeBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            default: null
        }
    }]
    });
    module.exports = mongoose.model('Comment', commentSchema);