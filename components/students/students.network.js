const express   = require('express');
const router    = express.Router();
const studentsController = require('./students.controller')

router.get('/all',(req,res)=>{
    studentsController.getStudents()
        .then(students=>{
            res.send(students)
        })
        .catch(e=>{
            res.send(e)
        })
});
router.get('/',(req,res)=>{
    studentsController.getStudents({classes: req.query.id})
        .then(students=>{
            res.send(students)
        })
        .catch(e=>{
            res.send(e)
        })
});
router.post('/',(req,res)=>{
    const {name,classes,password} = req.body
    studentsController.addStudent(name,classes,password)
        .then( newStudent => {
            res.send(newStudent)
        })
        .catch( e=>{
            res.send(e)
        })
});
router.put('/',(req,res)=>{
    res.send('peticion put a students')
});
router.delete('/',(req,res)=>{
    res.send('peticion delete a students')
});

module.exports = router;
