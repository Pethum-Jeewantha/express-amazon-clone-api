const mongoose = require('mongoose');

const Rating = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
    FIFTH: 5
}

module.exports = mongoose.model('Item', new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Rating,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}));
