const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    classes:{
        type: Array,
        required: true
    },
    questions:{
        type: Number,
        required: true
    },
    chapter:{
        type: Number,
        required: true
    }

})

const model     = mongoose.model('Test',mySchema)
module.exports  = model;