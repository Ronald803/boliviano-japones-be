const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    classes:{
        type: Array,
        required: true
    },
    cellphone:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    characteristic:{
        type: String,
        required: true
    }   
})

const model = mongoose.model('Teacher',mySchema)
module.exports = model;