const express = require ('express');
const app = express()
const router = express.Router()
const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const archivoBD = require ('./conexion')
//const rutaUsuario = require ('../React.js_ShoppingCart/models/client')
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

//app.use('/api/client/', rutaUsuario)
app.get ('/', (req, res)=>{
    res.end('backend ok')
})
app.listen(5000, function(){console.log('el servidor esta funcionando')})
const clientSchema = new Schema ({
    nombre: String,
    edad: Number,
    estado: String,
    
   
});
 
const ModeloUsuario = mongoose.model('clients', clientSchema);
//module.exports = router

app.post('/agregarUsuario', (req, res)=>{
    console.log('funciona');
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
            res.send('Cliente agregado')
        }else{res.send(err)}
    })
   // nuevousuario.replaceOne
})


app.post('/agregarCliente', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        edad: req.body.edad,
        estado: req.body.estado,
        idusuario: req.body.idusuario,
    })
    nuevousuario.save (function(err){
        if(!err){
            res.send('Cliente agregado')
        }else{res.send(err)}}
    )}
)
app.get('/obtenerClientes', (req, res) =>{
    ModeloUsuario.find({}, function(docs, err){if(!err){
        res.send(docs)
    }else{res.send(err)}
})
})

app.post('/obtenerDataCliente', (req, res) =>{
    ModeloUsuario.find({_id: req.body.idusuario}, function(docs, err){if(!err){
        res.send(docs)
    }else{res.send(err)}
})
})

app.post('/clienteEditado', (req, res) =>{
    console.log(req.body.id)
   ModeloUsuario.findOneAndUpdate({_id:req.body.id},{
        nombre:req.body.nombre,
        estado:req.body.estado,
    },(err)=>{
       if (!err){
            res.send("Usuario Modificado")
       }else{
            res.send("Error al modificar")
       }
    })
    
  
})

