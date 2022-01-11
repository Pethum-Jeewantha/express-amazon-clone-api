/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const Joi = require('joi');

module.exports = function () {
    Joi.objectId = require('joi-objectid')(Joi);
}
