const express           = require('express');
const router            = express.Router();
const questionController= require('./questions.controller');

router.get('/',(req,res)=>{
    questionController.getQuestion(req.query)
        .then(question=>{
            res.send(question)
        })
        .catch(e=>{res.send(e)})
})

router.post('/',(req,res)=>{
    const {question,possibleAnswers,test,answer} = req.body;
    questionController.addQuestion(question,possibleAnswers,test,answer)
        .then(question=>{
            res.send(question)
        })
        .catch(e=>{res.send(e)})
})

module.exports = router;