const students  = require('./components/students/students.network');
const teachers  = require('./components/teachers/teachers.network');
const classes   = require('./components/classes/classes.network');
const tests     = require('./components/tests/tests.network');
const questions = require('./components/questions/questions.network');

const routes = function(server){
    server.use('/api/tests',tests);
    server.use('/api/students',students);
    server.use('/api/teachers',teachers);
    server.use('/api/classes', classes);
    server.use('/api/questions',questions);
}

module.exports = routes
