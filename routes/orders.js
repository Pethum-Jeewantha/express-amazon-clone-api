const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const auth = require('../middleware/auth');
const {Order, validate} = require('../models/order');
const {User} = require('../models/user');
const Item = require('../models/item');
const Fawn = require('fawn');

Fawn.init(mongoose);

router.post('/', auth, async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.user._id);

    const item = await Item.findById(req.body.itemId);
    if (!item) return res.status(400).send('Invalid Item');

    if (item.qty < req.body.qty) return res.status(400).send('Items are less than to your order');

    const order = new Order({
        user: {
            userId: user.userId,
            name: user.name
        },
        qty: req.body.qty,
        unitPrice: req.body.unitPrice
    });

    try {
        new Fawn.Task()
            .save('orders', order)
            .update('items', {_id: item._id}, {
                qty: (item.qty - order.qty)
            })
            .run();

        res.send(order);
    } catch (ex) {
        res.status(500).send('Something failed');
    }
});

//TODO: Input Validation

module.exports = router;
