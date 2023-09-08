const express           = require('express');
const router            = express.Router();
const classesController = require('./classes.controller');

router.get('/all',(req,res)=>{
    classesController.getClasses()
        .then(classes=>{
            res.send(classes)
        })
        .catch(e=>{
            res.send(e)
        })
})

router.post('/',(req,res)=>{
    const {level,parallel} = req.body;
    classesController.addClasses(level,parallel)
        .then( newClasses =>{
            res.send(newClasses)
        })
        .catch( e=>{
            res.send(e)
        })
})

module.exports = router;