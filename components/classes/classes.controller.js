const classesStore  = require('./classes.store');
const studentsStore = require('../students/students.store');

function addClasses(level,parallel){
    return new Promise( async(resolve,reject)=>{
        const classes = {level,parallel,teacher:" ",students:0,characteristic:"created",testsAvailable:[]};
        const classesSaved = await classesStore.addClassesToDB(classes);
        resolve(classesSaved)
    })
}
function getClasses(filter){
    return new Promise( (resolve,reject)=>{
        resolve(classesStore.listClasses(filter))
    } )
}
function getSpecificClass(classes){
    return new Promise(async (resolve,reject)=>{
        const allStudents = await studentsStore.listStudents({classes})
        const infoClasses = await classesStore.listClasses({_id:classes})
        resolve({
            infoClasses: infoClasses[0],
            students: allStudents,
            msg:"get specific Class: " + classes
        })
    })
}
function addTestToClass(idClasses,idTest){
    return new Promise(async(resolve,reject)=>{
        let classesUpdated = await classesStore.addTestToClasses(idTest,idClasses)
        let allStudentsClasses = await studentsStore.listStudents({classes:idClasses})
        let newTest = {
            taken: false,
            idTest: idTest,
            points: null
        }
        allStudentsClasses.map(async(student)=>{
            await studentsStore.setNewTestStudentObject(student._id,newTest)
        })
        resolve({msg:"desde controller addTestToClasses"})
    })
}

module.exports = {addClasses,getClasses,getSpecificClass,addTestToClass}