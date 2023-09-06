const students = require('./components/students/students.network');

const routes = function(server){
    server.use('/api/tests',(req,res)=>{
        console.log('esta es una petición a tests');
        res.send('petición a tests')
    });
    server.use('/api/students',students);
}

module.exports = routes
