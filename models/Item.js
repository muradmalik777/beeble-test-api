var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    title: {
        type: String,
        default: ""
    },
    quantity:{
        type: Number,
        default: 0
    },
    description:{
        type: String,
        default: ""
    },
    image:{
        type: String,
        default: ""
    }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;