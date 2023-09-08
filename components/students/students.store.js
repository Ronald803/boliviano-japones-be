const StudentModel = require('./students.model');

async function addStudentToDB(student){
    const newStudent = new StudentModel(student)
    const studentSaved = newStudent.save()
    return studentSaved
}

async function listStudents(filter){
    const students = await StudentModel.find(filter)
    return students
}

module.exports = {addStudentToDB,listStudents}