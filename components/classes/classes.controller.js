const classesStore = require('./classes.store');

function addClasses(level,parallel){
    return new Promise( async(resolve,reject)=>{
        const classes = {level,parallel,teacher:"",students:0,characteristic:"created"};
        const classesSaved = await classesStore.addClassesToDB(classes);
        resolve(classesSaved)
    } )
}

module.exports = {addClasses}