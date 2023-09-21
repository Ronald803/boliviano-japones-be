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

async function setTestStudentScore(id,objectScoreNewTest){
    const foundStudent = await StudentModel.findById(id);
    foundStudent.points.push(objectScoreNewTest);
    foundStudent.save()
}

module.exports = {addStudentToDB,listStudents,setTestStudentScore}