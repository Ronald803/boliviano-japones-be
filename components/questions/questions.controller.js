const questionStore     = require('./questions.store');
const studentStore      = require('../students/students.store');

function addQuestion(question,possibleAnswers,test,answer){
    return new Promise(async(resolve,reject)=>{
        const newQuestion = {question,possibleAnswers,test,answer};
        const questionSaved = await questionStore.addQuestionToDB(newQuestion);
        resolve(questionSaved)
    })
}

function getQuestion(filter,student){
    return new Promise(async(resolve,reject)=>{
        const foundQuestions =  await questionStore.listQuestions(filter)
        const setNewTestScoreStudent = {
            test: filter.test,
            points: 0,
            questions: foundQuestions.length
        }
        await studentStore.setTestStudentScore(student._id,setNewTestScoreStudent);
        resolve(foundQuestions)

    })
}

function checkAnswer(studentAnswer,questionID,studentID){
    return new Promise(async(resolve,reject)=>{
        const question = await questionStore.listQuestions({_id:questionID})
        let result;
        if(question[0].answer===studentAnswer){
            result = "Correct"
        } else {
            result = "Incorrect"
        }
        resolve({
            ...question,
            studentAnswer,
            result
        })
    })
}


module.exports = { addQuestion, getQuestion }