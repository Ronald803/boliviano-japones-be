const bcryptjs      = require('bcryptjs');
const jwt           = require('jsonwebtoken');
const studentsStore = require('../students/students.store');
const teachersStore = require('../teachers/teachers.store');

function login(name,password,rol){
    return new Promise( async(resolve,reject)=>{
        if(!name || !password){return reject('Incomplete data')}
        let user = [];
        // __________________ Checking if the user exists ________________
        if(rol=="student"){
            user = await studentsStore.listStudents({name})
        } else if(rol=="teacher"){
            user = await teachersStore.listTeachers({name})
            console.log({user});    
        }
        if(user.length<1){return reject({msg: 'Incorrect information'})}
        // __________________ Checking if the password is correct ________
        const validPassword = bcryptjs.compareSync(password,user[0].password)
        if(!validPassword){return reject({msg: 'Incorrect information'})}
        //___________________ Generating jwebtoken _______________________
        const payload = {uid: user[0]._id}
        const token = jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '4h'})
        resolve({
            name: user[0].name,
            classes: user[0].classes,
            token
        })
    })
}

module.exports = {login}