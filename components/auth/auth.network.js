const express       = require('express');
const router        = express.Router();
const authController= require('./auth.controller');

router.post('/',(req,res)=>{
    const {name,password} = req.body;
    console.log(req.query.rol);
    console.log({name},{password});
    authController.login(name,password,req.query.rol)
        .then(token=>{
            res.send(token)
        })
        .catch(e=>{
            res.send(e)
        })
})

module.exports = router;