const testStore     = require('./tests.store');
const classesStore  = require('../classes/classes.store');

function addTest(name,description,level,questions,chapter,lifeBook){
    return new Promise(async(resolve,reject)=>{
        const test = {name,description,level,questions,chapter,lifeBook}
        const testSaved = await testStore.addTestToDB(test)
        resolve(testSaved)
    })
}

function getStudentTests(requestingUser){
    return new Promise(async (resolve, reject) => {
        try {
          let classesInfo = await classesStore.listClasses({ _id: requestingUser.classes }); // looks for the info of the student's class
          let testsPromises = classesInfo[0].testsAvailable.map(async (idTest) => {
            let testFound = await testStore.listTests({ _id: idTest });         // looks for the specific test
            let test = testFound[0];
            let points = null;
            const { _id, name, description, questions, chapter, lifeBook } = test;
            requestingUser.points.map((userScore) => {
              if (userScore.test == test._id) {
                points = Math.ceil((userScore.points * 35) / test.questions);
              }
            });
            return { _id, name, description, questions, chapter, points, lifeBook };
          });
    
          let tests = await Promise.all(testsPromises); // waits until all the promisses will be resolved
          resolve(tests);
        } 
        catch (error) { reject(error) }
      });
}
function getAllTests(){
    return new Promise(async(resolve,reject)=>{
        let tests = await testStore.listTests()
        resolve(tests)
    })
}
module.exports = {addTest,getStudentTests,getAllTests}