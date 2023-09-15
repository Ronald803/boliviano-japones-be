const { response,request } = require('express');
const jwt = require('jsonwebtoken')
const teachersModel = require('../components/teachers/teachers.model');
const studentsModel = require('../components/students/students.model');

const validateJWT = (rol)=>{
    return async (req=request,res=response,next)=>{
        const token = req.header('x-token')
        console.log({token});//-----------------------------------------------------
        try{
            if(!token){return res.status(401).json({msg: 'No existe token'})}
            const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY);
            console.log({uid});
            let usuario;
            if(rol === "student"){
                usuario = await studentsModel.findById(uid)
            } else if( rol === "teacher") {
                usuario = await teachersModel.findById(uid)
            }
            if(!usuario || usuario.characteristic == 'deleted'){return res.status(401).send({msg:"No tienes permiso"})}
            req.user = usuario;
            next();
        } catch(error) {
            res.status(401).json({
                error,
                msg: 'Algo salió mal'
            })
        }
    }
}

module.exports = {
    validateJWT
}