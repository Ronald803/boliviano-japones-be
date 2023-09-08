const testStore = require('./tests.store');

function addTest(name,description,classes,questions,chapter){
    return new Promise(async(resolve,reject)=>{
        const test = {name,description,classes,questions,chapter}
        const testSaved = await testStore.addTestToDB(test)
        resolve(testSaved)
    })
}

function getTests(filter){
    return new Promise( (resolve,reject)=>{
        resolve(testStore.listTests(filter))
    })
}
module.exports = {addTest,getTests}