const express = require ('express')
const router = express.Router()
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema ({
    nombre: String,
    edad: Number,
    estado: String,
    
   
});
 
const ModeloUsuario = mongoose.model('clients', clientSchema);
module.exports = router

router.post('/agregarUsuario', (req, res)=>{
    console.log('funcionaaaaa');
    //res.send({"status":"ok"});
    //return;
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        edad: req.body.edad,
        estado: req.body.estado,
        idusuario: req.body.idusuario,
    })
    console.log(nuevousuario)
    nuevousuario.save (function(err){
        if(!err){
            res.send('usuario agregado')
        }else{res.send(err)}
    })
})