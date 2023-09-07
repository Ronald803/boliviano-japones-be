const express           = require('express');
const router            = express.Router();
const classesController = require('./classes.controller');

router.get('/',(req,res)=>{
    res.send('peticion get a classes')
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