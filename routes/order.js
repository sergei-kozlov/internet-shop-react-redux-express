const {Router} = require('express');
const router = Router();
const Order = require('../models/order');

//Add order to DB
router.post('/', async (req, res) => {
    try {
        const order = new Order({
            name: req.body.name,
            pet: req.body.pet
        });
        await order.save();
        res.status(201).redirect('/confirm_order')


    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'

        })
    }
});

module.exports = router;


