const studentStore = require('./students.store');
const classesStore = require('../classes/classes.store');

function addStudent(name,classes,password){
    return new Promise( async (resolve,reject)=>{
        const student = { name,classes,password, characteristic: "created", points:[] }
        const studentSaved = await studentStore.addStudentToDB(student)
        await classesStore.increaseNumberOfStudentsToClasses(classes)
        resolve( studentSaved )
    } )
}

function getStudents(filter){
    return new Promise( (resolve,reject)=>{
        resolve(studentStore.listStudents(filter))
    })
}

module.exports = {addStudent,getStudents}