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

router.get('/', async (req, res) => {


});


module.exports = router;


