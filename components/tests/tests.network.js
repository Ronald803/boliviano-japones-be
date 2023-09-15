const express           = require('express');
const router            = express.Router();
const testController    = require('./tests.controller');
const { validateJWT } = require('../../middlewares/validateJWT');

router.post('/',validateJWT("teacher"),(req,res)=>{
    const {name,description,classes,questions,chapter} = req.body
    testController.addTest(name,description,classes,questions,chapter)
        .then(newTest=>{
            res.send(newTest)
        })
        .catch(e=>{
            res.send(e)
        })
})

router.get('/s',validateJWT("student"),(req,res)=>{
    console.log(req.user);
    testController.getStudentTests(req.user)
        .then(tests=>{
            res.send(tests)
        })
        .catch(e=>{
            res.send(e)
        })
})

module.exports = router;