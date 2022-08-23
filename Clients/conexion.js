const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase');

const objetodb = mongoose.connection

objetodb.on('connected', ()=>{console.log('conexion correcta a mongodb')})
objetodb.on('error', ()=>{console.log('error en la conexion a mongodb')})

module.exports =  mongoose