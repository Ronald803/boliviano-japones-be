const ClassesModel = require('./classes.model');

async function addClassesToDB(classes){
    const newClasses = new ClassesModel(classes)
    const classesSaved = newClasses.save()
    return classesSaved
}

module.exports = {addClassesToDB}