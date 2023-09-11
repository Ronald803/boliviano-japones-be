const { response,request } = require('express');
const jwt = require('jsonwebtoken')
const teachersModel = require('../components/teachers/teachers.model');
const studentsModel = require('../components/students/students.model');
//const Model = require('../components/users/model')

const validateJWT = (rolArray)=>{
    return async (req=request,res=response,next)=>{
        const token = req.header('x-token')
        const isRol = async (rol,id) => {
            let user;
            if(rol==="teacher"){
                user = await teachersModel.findById(id)
            } else if (rol ==="student"){
                user = await studentsModel.findById(id)
            }
            return user
        }
        try{
            console.log("aaaa");
            if(!token && rolArray[0]=='everybody'){return next()}
            if(!token){return res.status(401).json({msg: 'There is no token'})}
            const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY);
            console.log({uid});
            let usuario;
            for (let index = 0; index < rolArray.length; index++) {
                usuario = isRol(rolArray[i],uid);
                if(usuario){index==rolArray.length}                
            }
            console.log(usuario);
            if(!usuario){return res.send({msg:"no tienes permiso"})}
            //if(rolArray.length>0){
            //    if(rolArray[0]=='everybody'){
            //        req.user = user;
            //        return next();
            //    }    
            //}
            //let permission = false
            //if(rolArray.length>0){
            //    rolArray.map(rol=>{
            //        if(rol===user.rol){
            //            permission=true
            //        }
            //    })    
            //} else{permission = true}
            //if(!permission){
            //    return res.status(401).json({
            //        msg: 'You do not have permission for this operation'
            //    })
            //}
            //req.user = user;
            next();
        } catch(error) {
            res.status(401).json({
                error,
                msg: 'Something went wrong'
            })
        }
    }
}

module.exports = {
    validateJWT
}