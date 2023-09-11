const express           = require('express');
const router            = express.Router();
const testController    = require('./tests.controller');
const { validateJWT } = require('../../middlewares/validateJWT');

router.post('/',(req,res)=>{
    const {name,description,classes,questions,chapter} = req.body
    testController.addTest(name,description,classes,questions,chapter)
        .then(newTest=>{
            res.send(newTest)
        })
        .catch(e=>{
            res.send(e)
        })
})

router.get('/',(req,res)=>{
    testController.getTests()
        .then(tests=>{
            res.send(tests)
        })
        .catch(e=>{
            res.send(e)
        })
})

module.exports = router;