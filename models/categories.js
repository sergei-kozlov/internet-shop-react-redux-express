const {Schema, model} = require('mongoose');

const Categories = new Schema({

    idx: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    }

});

module.exports = model('Categories', Categories);