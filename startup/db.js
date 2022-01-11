/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    const db = config.get('db');
    mongoose.connect(db)
        .then(() => winston.info(`MongoDB Connected to ${db} ...`));
}
