const {Router} = require('express');
const Phone = require('../models/phones');
const router = Router();

//Add phone
router.post('/', async (req, res) => {
    try {
        const phone = new Phone({
            categoryId: req.body.categoryId,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            cpu: req.body.cpu,
            camera: req.body.camera,
            size: req.body.size,
            weight: req.body.weight,
            display: req.body.display,
            battery: req.body.battery,
            memory: req.body.memory
        });
        await phone.save();
        res.status(201).json({phone});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

//Get phones
router.get('/', async (req, res) => {
    try {
        const items = await Phone.find();
        const phones = {
            "phones": items
        };
        res.status(200).json(phones);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

//Get phone by id
router.get('/:id', async (req, res) => {
    try {
        const phone = await Phone.findById(req.params.id);
        res.status(200).json(phone);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

//Change phone's data
router.put('/:id', async (req, res) => {
    try {
        const phone = await Phone.findById(req.params.id);
        phone.done = req.body.done;
        await phone.save();
        res.status(201).json(phone);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        });
    }

});

//Delete phone
router.delete('/:id', async (req, res) => {
        try {
            const phone = await Phone.findOneAndDelete(req.params.id);
            res.status(204);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: 'Server error'
            });
        }
    }
);


module.exports = router;



