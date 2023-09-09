const express           = require('express');
const router            = express.Router();
const questionController= require('./questions.controller');

router.get('/',(req,res)=>{
    questionController.getQuestion()
        .then(question=>{
            res.send(question)
        })
        .catch(e=>{res.send(e)})
})

router.post('/',(req,res)=>{
    questionController.addQuestion()
        .then(question=>{
            res.send(question)
        })
        .catch(e=>{res.send(e)})
})

module.exports = router;