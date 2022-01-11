const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get('/', async (req, res) => {
    res.send(await Item.find().sort('_id'));
});

module.exports = router;
