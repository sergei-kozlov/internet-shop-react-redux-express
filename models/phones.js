const {Schema, model} = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
const mongoose = require('mongoose');
mongoose.plugin(toJson);



const Phones = new Schema({

    categoryId: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    cpu: {
        type: String,
        required: true
    },

    camera: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },

    weight: {
        type: String,
        required: true
    },

    display: {
        type: String,
        required: true
    },

    battery: {
        type: String,
        required: true
    },

    memory: {
        type: String,
        required: true
    }
});

Phones.plugin(toJson);


module.exports = model('Phones', Phones);



