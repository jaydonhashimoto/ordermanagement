const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const OrderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: 'Name',
        required: true
    },
    price: {
        type: String,
        default: '0.00',
        required: true
    },
    quantity: {
        type: String,
        default: '0',
        required: true
    }
});

module.exports = Order = mongoose.model('order', OrderSchema);