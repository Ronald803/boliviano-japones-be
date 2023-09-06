const StudentModel = require('./students.model');

async function addStudentToDB(student){
    const newStudent = new StudentModel(student)
    const studentSaved = newStudent.save()
    return studentSaved
}

module.exports = {addStudentToDB}