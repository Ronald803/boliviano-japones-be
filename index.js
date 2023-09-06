const express   = require('express');
const config    = require('./config');
const router    = require('./routes');
const connectDB = require('./db');

connectDB(config.dbUrl)
const app = express();

app.use(express.json())
router(app);

app.listen(config.port, ()=>{
    console.log('La aplicacion está escuchando en http://localhost:'+config.port);
});
