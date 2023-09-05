const express = require('express');
const config = require('./config');

const app = express();

app.use('/',function(req,res){
    res.send('hola esta es el backend de la app boliviano japones')
})

app.listen(config.port, ()=>{
    console.log('La aplicacion está escuchando en http://localhost:'+config.port);
});
