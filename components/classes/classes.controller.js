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


module.exports = {addClasses,getClasses,getSpecificClass}