const students  = require('./components/students/students.network');
const teachers  = require('./components/teachers/teachers.network');
const classes   = require('./components/classes/classes.network');

const routes = function(server){
    server.use('/api/tests',(req,res)=>{
        console.log('esta es una petición a tests');
        res.send('petición a tests')
    });
    server.use('/api/students',students);
    server.use('/api/teachers',teachers);
    server.use('/api/classes', classes)
}

module.exports = routes
