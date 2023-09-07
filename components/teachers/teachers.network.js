const express           = require('express');
const router            = express.Router();
const teachersController= require('./teachers.controller');

router.get('/',(req,res)=>{
    res.send('peticion get a teachers')
});
router.post('/',(req,res)=>{
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
