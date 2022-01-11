/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const winston = require('winston');
require('winston-mongodb');
const config = require('config');
require('express-async-errors');

module.exports = function () {
    winston.handleExceptions(
        new winston.transports.Console({colorize: true, prettyPrint: true}),
        new winston.transports.File({filename: 'uncaughtExceptions.log'}));

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(winston.transports.File, {filename: 'logfile.log'});
    winston.add(winston.transports.MongoDB, {
        db: config.get('db'),
        level: 'error'
    });
}
