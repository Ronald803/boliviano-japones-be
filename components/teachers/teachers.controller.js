const teacherStore = require('./teachers.store');
const classesStore = require('../classes/classes.store');

function addTeacher(name,password,classes,cellphone,email,idClasses){
    return new Promise( async(resolve,reject)=>{
        // _____________________ Saving teacher data in DB ______________
        const teacher = {name,password,classes,cellphone,email,characteristic:"created"}
        const teacherSaved = await teacherStore.addTeacherToDB(teacher)
        // _____________________ Saving idTeacher in Classes object _____
        classesStore.addTeacherToClasses(idClasses,teacherSaved._id)
        resolve( teacherSaved )
    } )
}


module.exports = {addTeacher}
