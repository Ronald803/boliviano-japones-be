const express           = require('express');
const router            = express.Router();
const questionController= require('./questions.controller');
const { validateJWT }   = require('../../middlewares/validateJWT');
const studentStore      = require('../students/students.store');

router.get('/',(req,res)=>{
    questionController.getQuestion(req.query)
        .then(question=>{ res.send(question) })
        .catch(e=>{res.send(e)})
})

router.get('/t',validateJWT('teacher'),(req,res)=>{
    questionController.getQuestion(req.query,'teacher')
        .then(questions=>{
            res.send(questions)
        })
        .catch(e=>{res.send(e)})
})
router.get('/s',validateJWT('student'),(req,res)=>{
    const student = req.user;
    const testAlreadyTaken = student.points.some(element=>{
        if(element.idTest === req.query.test && element.taken === true){
            return true
        } else {
            return false
        }
    })
    if(testAlreadyTaken){return res.send('Ya tomaste este examen')}
    questionController.getQuestion(req.query,'student')
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
    const student = req.user
    const {test} = req.body;
    let califications = await Promise.all(
        test.map( (question) => {
            return questionController.checkAnswer(question.studentAnswer,question._id,student._id)
        })
    )
    let points = 0
    califications.map( a => {
        if(a.result === "Correct"){
            points++
        }
    })
    console.log(califications);
    const score = await studentStore.addPoints(student._id,points,califications[0].test)
    res.send({califications,score})
});

module.exports = router;