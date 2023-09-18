const express           = require('express');
const router            = express.Router();
const questionController= require('./questions.controller');
const { validateJWT } = require('../../middlewares/validateJWT');

router.get('/',(req,res)=>{
    questionController.getQuestion(req.query)
        .then(question=>{
            res.send(question)
        })
        .catch(e=>{res.send(e)})
})

router.post('/',validateJWT("teacher"),(req,res)=>{
    const {question,possibleAnswers,test,answer} = req.body;
    questionController.addQuestion(question,possibleAnswers,test,answer)
        .then(question=>{
            res.send(question)
        })
        .catch(e=>{res.send(e)})
})

router.put('/',validateJWT("student"), async(req,res)=>{
    const foundUser = req.user
    const {test} = req.body;
    //let califications = await Promise.all(
    //    test.map( (exercise) => {
    //        return questionController.checkAnswer(exercise.response,exercise._id,foundUser._id)
    //    })
    //)
    //let points = 0
    //califications.map( a => {
    //    if(a.result === "Correct"){
    //        points++
    //    }
    //})
    //const score = await storeUser.addPoints(foundUser._id,points,califications[0].test)
    //res.send({califications,score})
});

module.exports = router;