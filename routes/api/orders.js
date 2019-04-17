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
        quantity: req.body.quantity
    });
    newOrder.save().then(order => res.json(order));
});

/**
 * @route DELETE api/orders/:id
 * @desc Delete an order
 * @access Public
 */
router.post('/:id', (req, res) => {
    Order.findById(req.params.id)
        .then(order => order.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;