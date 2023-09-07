const TeacherModel = require('./teachers.model');

async function addTeacherToDB(teacher){
    const newTeacher = new TeacherModel(teacher)
    const teacherSaved = newTeacher.save()
    return teacherSaved
}

module.exports = {addTeacherToDB}