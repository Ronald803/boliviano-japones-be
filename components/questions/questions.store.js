const QuestionModel = require('./questions.model');

async function listQuestions(filter){
    const questions = await QuestionModel.find(filter);
    return questions;
}

async function addQuestionToDB(question){
    const newQuestion = new QuestionModel(question)
    const questionSaved = newQuestion.save()
    return questionSaved
}


module.exports = {listQuestions,addQuestionToDB}