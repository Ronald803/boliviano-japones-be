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

async function addPoints(studentId,points,test){
    const foundStudent = await StudentModel.findById(studentId);
    let index = -1; 
    foundStudent.points.map((element,i)=>{
        if(element.idTest == test){
            index=i;
        }
    })
    console.log({index});
    if(index!=-1){
        let studentsPoints = foundStudent.points; 
        studentsPoints[index].points = points;
        studentsPoints[index].taken = true;
        console.log({studentsPoints});
        foundStudent.points = [];
        foundStudent.points = studentsPoints
        // let notes=foundStudent.points[index]
        // newScore = {
        //     test: notes.test,
        //     points: points,
        //     questions: notes.questions
        // }
        // foundStudent.points.splice(index,1)
        // foundStudent.points.push(newScore)
    }
    const score = await foundStudent.save()
    console.log({score});
    console.log(score.points);
    return score
}

async function setNewTestStudentObject(idStudent,newTest){
    const foundStudent = await StudentModel.findById(idStudent)
    foundStudent.points.push(newTest)
    const savedStudent = await foundStudent.save();
    return savedStudent
}
module.exports = {addStudentToDB,listStudents,setTestStudentScore,addPoints,setNewTestStudentObject}