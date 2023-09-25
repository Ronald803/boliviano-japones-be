const express           = require('express');
const router            = express.Router();
const testController    = require('./tests.controller');
const { validateJWT } = require('../../middlewares/validateJWT');

router.post('/',validateJWT("teacher"),(req,res)=>{
    const {name,description,level,questions,chapter,lifeBook} = req.body
    testController.addTest(name,description,level,questions,chapter,lifeBook)
        .then(newTest=>{
            res.send(newTest)
        })
        .catch(e=>{
            res.send(e)
        })
})

router.get('/student',validateJWT("student"),(req,res)=>{
    console.log(req.user);
    testController.getStudentTests(req.user)
        .then(tests=>{
            res.send(tests)
        })
        .catch(e=>{
            res.send(e)
        })
})
router.get('/teacher',validateJWT("teacher"),(req,res)=>{
    testController.getAllTests()
        .then(tests=>{
            res.send(tests)
        })
        .catch(e=>{
            res.send(e)
        })
})
module.exports = router;