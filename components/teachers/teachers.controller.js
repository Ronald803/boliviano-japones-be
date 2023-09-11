const teacherStore = require('./teachers.store');
const classesStore = require('../classes/classes.store');
const bcryptjs     = require('bcryptjs');

function addTeacher(name,password,classes,cellphone,email){
    return new Promise( async(resolve,reject)=>{
        // _____________________ Encrypting password ____________________
        const salt = bcryptjs.genSaltSync();
        const encryptPassword = bcryptjs.hashSync( password,salt)
        // _____________________ Saving teacher data in DB ______________
        const teacher = {name,password:encryptPassword,classes,cellphone,email,characteristic:"created"}
        const teacherSaved = await teacherStore.addTeacherToDB(teacher)
        // _____________________ Saving idTeacher in Classes object _____
        classesStore.addTeacherToClasses(classes,teacherSaved._id)
        resolve( teacherSaved )
    } )
}
function getTeachers(filter){
    return new Promise( (resolve,reject)=>{
        resolve(teacherStore.listTeachers(filter))
    } )
}


module.exports = {addTeacher,getTeachers}
