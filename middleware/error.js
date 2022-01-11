/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const winston = require('winston');

module.exports = function (err, req, res, next) {
    winston.error(err.message, err);
    res.status(500).send('Something failed');
}
