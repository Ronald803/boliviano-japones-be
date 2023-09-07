const teacherStore = require('./teachers.store');

function addTeacher(name,password,classes,cellphone,email){
    return new Promise( async(resolve,reject)=>{
        const teacher = {name,password,classes,cellphone,email,characteristic:"created"}
        const teacherSaved = await teacherStore.addTeacherToDB(teacher)
        resolve( teacherSaved )
    } )
}

module.exports = {addTeacher}
