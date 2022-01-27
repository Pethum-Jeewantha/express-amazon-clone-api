/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const express = require('express');
const cors = require('cors');
const items = require('../routes/items');
const users = require('../routes/users');
const login = require('../routes/login');
const orders = require('../routes/orders');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(cors());
    app.use(express.json());
    app.use('/api/items', items);
    app.use('/api/users', users);
    app.use('/api/login', login);
    app.use('/api/orders', orders);
    app.use(error);
}
