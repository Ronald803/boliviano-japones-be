const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    question: {
        type: String,
        required: true
    },
    possibleAnswers: {
        type: Array,
        required: true
    },
    test: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Question',mySchema)
module.exports = model;