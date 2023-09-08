const students  = require('./components/students/students.network');
const teachers  = require('./components/teachers/teachers.network');
const classes   = require('./components/classes/classes.network');
const tests     = require('./components/tests/tests.network');

const routes = function(server){
    server.use('/api/tests',tests);
    server.use('/api/students',students);
    server.use('/api/teachers',teachers);
    server.use('/api/classes', classes)
}

module.exports = routes
