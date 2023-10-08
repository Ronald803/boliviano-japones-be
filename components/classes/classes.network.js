const express           = require('express');
const router            = express.Router();
const classesController = require('./classes.controller');
const { validateJWT } = require('../../middlewares/validateJWT');

router.get('/all',validateJWT('teacher'),(req,res)=>{
    classesController.getClasses()
        .then(classes=>{
            res.send(classes)
        })
        .catch(e=>{
            res.send(e)
        })
})

router.get('/:id',validateJWT('teacher'),(req,res)=>{
    classesController.getSpecificClass(req.params.id)
        .then(allInfoClasses=>{
            res.send(allInfoClasses)
        })
        .catch(e=>console.log(e))
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

router.put('/tests',validateJWT('teacher'),(req,res)=>{
    const {idClasses,idTest} = req.body
    classesController.addTestToClass(idClasses,idTest)
        .then(msg=>{ res.send(msg) })
        .catch(e=>{ res.send(e) })
})
module.exports = router;