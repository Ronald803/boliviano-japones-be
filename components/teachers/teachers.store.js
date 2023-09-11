const TeacherModel = require('./teachers.model');

async function addTeacherToDB(teacher){
    const newTeacher = new TeacherModel(teacher)
    const teacherSaved = newTeacher.save()
    return teacherSaved
}

async function listTeachers(filter){
    const teachers = await TeacherModel.find(filter)
    return teachers
}

module.exports = {addTeacherToDB,listTeachers}