const express = require('express');
const router = express.Router();

//Order model
const Order = require('../../models/Order');

/**
 * @route GET api/orders
 * @desc GET all orders
 * @access Public
 */
router.get('/', (req, res) => {
    Order.find()
        .sort({ date: -1 })
        .then(orders => res.json(orders))
});

/**
 * @route POST api/orders
 * @desc Create an order
 * @access Public
 */
router.post('/', (req, res) => {
    const newOrder = new Order({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description
    });
    newOrder.save().then(order => res.json(order));
});

/**
 * @route DELETE api/orders/:id
 * @desc Delete an order
 * @access Public
 */
router.post('/:id', (req, res) => {
    console.log(req);
    Order.findById(req.params.id)
        .then(order => order.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

/**
 * @route UPDATE api/orders/update/
 * @desc UPDATE an order
 * @access Public
 */
router.post('/update/:id', (req, res) => {
    Order.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity,
                description: req.body.description
            }
        },
        { new: true },
        (err, doc) => {
            if (err) console.log(err);
            console.log(doc);
        }
    )
        .then(() => res.json({ updatesuccess: true }))
        .catch(err => res.status(404).json({ updatesuccess: false }));
});

module.exports = router;