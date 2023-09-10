const studentStore  = require('./students.store');
const classesStore  = require('../classes/classes.store');
const bcryptjs      = require('bcryptjs')

function addStudent(name,classes,password){
    return new Promise( async (resolve,reject)=>{
        //____________________encrypting password__________________
        const salt = bcryptjs.genSaltSync();
        const encryptPassword =  bcryptjs.hashSync( password,salt )
        //_________________________________________________________
        const student = { name,classes,password:encryptPassword, characteristic: "created", points:[] }
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