const {Router} = require('express');
const Categories = require('../models/categories');
const router = Router();

//Add categories
router.post('/', async (req, res) => {
    try {
        const categories = new Categories({
            idx: req.body.idx,
            name: req.body.name
        });
        await categories.save();
        res.status(201).json({categories});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

//Get categories
router.get('/', async (req, res) => {
    try {
        const items = await Categories.find();
        const categories = {
            "categories": items
        };
        res.status(200).json(categories);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error!'
        })
    }
});

//Get categories by id
router.get('/:id', async (req, res) => {
    try {
        const categories = await Categories.findById(req.params.id);
        res.status(200).json(categories);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
});

//Change categories data
router.put('/:id', async (req, res) => {
    try {
        const categories = await Categories.findById(req.params.id);
        categories.done = req.body.done;
        await categories.save();
        res.status(201).json(categories);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        });
    }
});

//Delete Categories
router.delete('/:id', async (req, res) => {
        try {
            const categories = await Categories.findOneAndDelete(req.params.id);
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



