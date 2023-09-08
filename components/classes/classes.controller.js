const classesStore = require('./classes.store');

function addClasses(level,parallel){
    return new Promise( async(resolve,reject)=>{
        const classes = {level,parallel,teacher:" ",students:0,characteristic:"created",testsAvailable:[]};
        const classesSaved = await classesStore.addClassesToDB(classes);
        resolve(classesSaved)
    })
}
function getClasses(filter){
    return new Promise( (resolve,reject)=>{
        resolve(classesStore.listClasses(filter))
    } )
}

module.exports = {addClasses,getClasses}