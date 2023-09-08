const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    classes: {
        type: String,
        required: true
    },
    characteristic: {
        type: String,
        required: true
    },
    points: {
        type: Array,
        required: true
    }
})

const model = mongoose.model('Student',mySchema)
module.exports = model;