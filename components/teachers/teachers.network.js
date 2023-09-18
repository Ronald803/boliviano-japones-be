const express           = require('express');
const router            = express.Router();
const teachersController= require('./teachers.controller');
const { validateJWT }   = require('../../middlewares/validateJWT');

router.get('/',(req,res)=>{
    teachersController.getTeachers()
        .then(teachers=>{res.send(teachers)})
        .catch(e=>{res.send(e)})
});
router.post('/',validateJWT('teacher'),(req,res)=>{
    const {name,password,classes,cellphone,email} = req.body
    teachersController.addTeacher(name,password,classes,cellphone,email)
        .then( newTeacher => {
            res.send(newTeacher)
        })
        .catch( e=>{
            res.send(e)
        })
});
router.put('/',(req,res)=>{
    res.send('peticion put a teachers')
});
router.delete('/',(req,res)=>{
    res.send('peticion delete a teachers')
});

module.exports = router;
