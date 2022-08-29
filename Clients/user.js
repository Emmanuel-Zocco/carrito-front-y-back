const express = require ('express')
const router = express.Router()
const mongoose = require ('mongoose');
const { Router } = require('react-router');
const eschema = mongoose.Schema
const eschemausuario = new eschema({
           nombre: String,
            edad: String,
            estado: String,
            idUsuario: String
});

const ModeloUsuario = mongoose.model ('usuarios', eschemausuario)
module.exports = router

router.post('/agregarUsuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        edad: req.body.edad,
        estado: req.body.estado,
        idusuario: req.body.idusuario,
    })
    nuevousuario.save (function(err){
        if(!err){
            res.send('usuario agregado')
        }else{res.send(err)}}
    )}
)
router.get('/obtenerusuarios', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){if(!err){
        res.send('usuario agregado')
    }else{res.send(err)}
})
})