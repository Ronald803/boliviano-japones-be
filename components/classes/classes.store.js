const ClassesModel = require('./classes.model');

async function addClassesToDB(classes){
    const newClasses = new ClassesModel(classes)
    const classesSaved = newClasses.save()
    return classesSaved
}
async function addTeacherToClasses(idClasses, idTeacher){
    const classesFound = await ClassesModel.findById(idClasses);
    classesFound.teacher = idTeacher;
    classesFound.save()
}
async function increaseNumberOfStudentsToClasses(idClasses){
    const classesFound = await ClassesModel.findById(idClasses);
    if(classesFound.length>0){
        classesFound.students = classesFound.students + 1
        classesFound.save();
        return true
    }else{ return false } 
}
async function listClasses(filter){
    const classes = await ClassesModel.find(filter)
    return classes
}
async function addTestToClasses(idTest,idClasses){
    const classesFound = await ClassesModel.findById(idClasses)
    classesFound.testsAvailable.push(idTest)
    const classesSaved = await classesFound.save();
    return classesSaved
}

module.exports = {
    addClassesToDB,
    addTeacherToClasses,
    listClasses,
    increaseNumberOfStudentsToClasses,
    addTestToClasses
}