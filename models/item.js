/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const mongoose = require('mongoose');

module.exports = mongoose.model('Item', new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
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
