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

async function addPoints(id,points,test){
    const foundStudent = await StudentModel.findById(id);
    let index  
    foundStudent.points.map((element,i)=>{
        if(element.test == test){
            index=i;
        }
    })
    console.log("aaaaaaa",foundStudent);
    console.log("test",test);
    let newScore
    if(index!=-1){ 
        let notes=foundStudent.points[index]
        console.log("bbbbbb",notes);
        newScore = {
            test: notes.test,
            points: points,
            questions: notes.questions
        }
        foundStudent.points.splice(index,1)
        foundStudent.points.push(newScore)
    }
    const score = await foundStudent.save()
    return score
}
module.exports = {addStudentToDB,listStudents,setTestStudentScore,addPoints}