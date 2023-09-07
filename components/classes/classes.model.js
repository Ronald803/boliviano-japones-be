const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    level:{
        type: String,
        required: true
    },
    parallel:{
        type: String,
        required: true
    },
    teacher:{
        type: String,
        required: true
    },
    students:{
        type: Number,
        required: true
    },
    characteristic:{
        type: String,
        required: true
    }
})

const model = mongoose.model('Classes',mySchema)
module.exports = model;

