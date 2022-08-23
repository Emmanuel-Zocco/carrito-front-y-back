const express = require ('express');
const app = express()

const archivoBD = require ('./conexion')
const rutaUsuario = require ('../React.js_ShoppingCart/models/client')
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/client/', rutaUsuario)
app.get ('/', (req, res)=>{
    res.end('backend ok')
})
app.listen(5000, function(){console.log('el servidor esta funcionando')})

