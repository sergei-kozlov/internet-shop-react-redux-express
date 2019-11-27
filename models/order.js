const {Schema, model} = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
const mongoose = require('mongoose');
mongoose.plugin(toJson);

const Order = new Schema ({
    name: {
        type: String,
        required: true
    },
    pet:
        {
            type: String,
            required: true
        },


});

Order.plugin(toJson);

module.exports = model('Order', Order);
