const questionStore     = require('./questions.store');
const studentStore      = require('../students/students.store');

function addQuestion(question,possibleAnswers,test,answer){
    return new Promise(async(resolve,reject)=>{
        const newQuestion = {question,possibleAnswers,test,answer};
        const questionSaved = await questionStore.addQuestionToDB(newQuestion);
        resolve(questionSaved)
    })
}

function getQuestion(filter,rol){
    return new Promise(async(resolve,reject)=>{
        const foundQuestions =  await questionStore.listQuestions(filter)
        if(rol==='teacher'){
            resolve(foundQuestions)
        } else {
            let modifiedQuestions = [];
            foundQuestions.map(q=>{
                const {_id,question,possibleAnswers} = q
                modifiedQuestions.push({_id,question,possibleAnswers,answer:""})
            })
            resolve(modifiedQuestions)    
        }
    })
}

function checkAnswer(studentAnswer,questionID,studentID){
    return new Promise(async(resolve,reject)=>{
        const questionDB = await questionStore.listQuestions({_id:questionID})
        let result;
        if(questionDB[0].answer===studentAnswer){
            result = "Correct"
        } else {
            result = "Incorrect"
        }
        const {_id,question,possibleAnswers,test,answer} = questionDB[0]
        resolve({
            _id,question,possibleAnswers,test,answer,
            studentAnswer,
            result
        })
    })
}


module.exports = { addQuestion, getQuestion, checkAnswer }