const TestModel = require('./tests.model');

async function addTestToDB(test){
    const newTest = new TestModel(test);
    const testSaved = newTest.save()
    return testSaved
}

async function listTests(filter){
    const tests = await TestModel.find(filter)
    return tests
}

module.exports = {addTestToDB,listTests}