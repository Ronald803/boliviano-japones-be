const questionStore = require('./questions.store')

function addQuestion(question,possibleAnswers,test,answer){
    return new Promise(async(resolve,reject)=>{
        const newQuestion = {question,possibleAnswers,test,answer};
        const questionSaved = await questionStore.addQuestionToDB(newQuestion);
        resolve(questionSaved)
    })
}

function getQuestion(filter){
    return new Promise((resolve,reject)=>{
        resolve(questionStore.listQuestions(filter))
    })
}


module.exports = { addQuestion, getQuestion }