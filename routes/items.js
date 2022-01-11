/*
 * Copyright (c) 2022 - present Pethum Jeewantha. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.txt in the project root for license information.
 */

const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const mongoose = require("mongoose");

router.get('/', async (req, res) => {
    res.send(await Item.find().sort('_id'));
});

router.get('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send('Invalid Id');

    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send('The item with the given ID is not exists');

    res.send(item);
});

module.exports = router;
