const {Router} = require('express');
const router = Router();
const Order = require('../models/order');

//Add order to DB
router.post('/', async (req, res) => {
    try {
        const order = new Order({
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            app: req.body.app
        });
        await order.save();
        res.status(201).json(order);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

//Get all orders
router.get('/', async (req, res) => {
    try {
        const item = await Order.find();
        const orders = {
            "order": item
        };
        res.status(200).json(orders)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error!'
        });
    }
});

//Get order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error!'
        });
    }
});

//Delete order by ID
router.delete('/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        res.status(204);

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error!'
        })
    }
});

module.exports = router;


