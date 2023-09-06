const express   = require('express');
const router    = express.Router();
const studentsController = require('./students.controller')

router.get('/',(req,res)=>{
    res.send('peticion get a students')
});
router.post('/',(req,res)=>{
    const {name,level,parallel,password} = req.body
    studentsController.addStudent(name,level,parallel,password)
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
