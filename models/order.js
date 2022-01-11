const mongoose = require('mongoose');
const Joi = require("joi");

const Order = mongoose.model('Order', new mongoose.Schema({
    user: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            userId: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 255
            }
        }),
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    }
}));

function validateOrder(order) {
    const schema = {
        itemId: Joi.objectId().required(),
        qty: Joi.number().min(1).required(),
        unitPrice: Joi.number().min(5).required()
    };

    return Joi.validate(order, schema);
}

exports.Order = Order
exports.validate = validateOrder;
