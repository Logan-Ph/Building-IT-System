const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userName: {
        type: String,
        required: true,
    },
    userImg: {
        data: Buffer
    },
    commentText: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
    },
    rating: {
        type: Number,
    },
    replyMessage: [{
        commentId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        replyText: {
            type: String,
            required: true
        },
        vendorBusinessName: {
            type: String,
        },
        vendorImg: {
            data: Buffer
        },
        userName: {
            type: String,
            required: true,
        },
        userImg: {
            data: Buffer
        },
        postedOn: {
            type: Date,
            default: Date.now
        },
    }],
    like: [{
        likes: {
            type: Number,
            default: 0,
        },
        likeBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            default: null
        }
    }]
});
module.exports = mongoose.model('Comment', commentSchema);