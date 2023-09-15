const testStore = require('./tests.store');

function addTest(name,description,classes,questions,chapter){
    return new Promise(async(resolve,reject)=>{
        const test = {name,description,classes,questions,chapter}
        const testSaved = await testStore.addTestToDB(test)
        resolve(testSaved)
    })
}

function getStudentTests(requestingUser){
    return new Promise( async (resolve,reject)=>{
        let tests = await testStore.listTests()
        let testsAvailableStudent = [];
        tests.map((test,index)=>{
            test.classes.map(classes=>{
                console.log(classes);
                if(classes==requestingUser.classes){
                    let points = null;
                    const {_id,name,description,questions,chapter} = test
                    requestingUser.points.map(userScore=>{
                        if(userScore.idTest===test._id){
                            points = Math.ceil((userScore.points*35)/test.questions)
                        }
                    })
                    testsAvailableStudent.push({_id,name,description,questions,chapter,points})
                }
            })
        })
        resolve(testsAvailableStudent)

    })
}
module.exports = {addTest,getStudentTests}