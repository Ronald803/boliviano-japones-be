const questionStore = require('./questions.store')

function addQuestion(){
    return new Promise(async(resolve,reject)=>{
        const question = {};
        const questionSaved = await questionStore.addQuestionToDB(question);
        resolve(questionSaved)
    })
}

function getQuestion(){
    return new Promise((resolve,reject)=>{
        resolve({msg: "get question desde controller"})
    })
}


module.exports = { addQuestion, getQuestion }