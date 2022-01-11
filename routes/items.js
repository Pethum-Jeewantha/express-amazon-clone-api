const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const validateObjectId = require('../middleware/validateObjectId');

router.get('/', async (req, res) => {
    res.send(await Item.find().sort('_id'));
});

router.get('/:id', validateObjectId, async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send('The item with the given ID is not exists');

    res.send(item);
});

module.exports = router;
