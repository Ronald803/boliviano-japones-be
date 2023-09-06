const studentStore = require('./students.store');

function addStudent(name,level,parallel,password){
    return new Promise( async (resolve,reject)=>{
        const student = { name,level,parallel,password, characteristic: "created", points:[] }
        const studentSaved = await studentStore.addStudentToDB(student)
        resolve( studentSaved )
    } )
}

module.exports = {addStudent}