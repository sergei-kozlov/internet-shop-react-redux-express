const {Schema, model} = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
const mongoose = require('mongoose');
mongoose.plugin(toJson);

const Categories = new Schema({

    name: {
        type: String,
        required: true
    }

});

Categories.plugin(toJson);

module.exports = model('Categories', Categories);