/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const express = require('express');
require('mongoose');
const _ = require("lodash");
const router = express.Router();

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({userId: req.body.userId});
    if (!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    res.header('x-auth-token', user.generateAuthToken()).send(_.pick(user, ['name', 'userId']));
});

function validate(req) {
    const schema = {
        userId: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(1024).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;
