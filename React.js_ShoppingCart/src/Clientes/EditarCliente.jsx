import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router'

function Editarcliente (){
    const params = useParams ()

    const [estado, setEstado]= useState('')
    const [nombre, setNombre]= useState('')
    const [id, setId]= useState('')
console.log(params)
    useEffect(
        ()=>{axios.post('/obtenerdatacliente' , {idusuario: params.id}).then(res =>{
            console.log(res.data[0])
            const dataCliente = res.data[0]
            setEstado (dataCliente.estado)
            setNombre (dataCliente.nombre)
            setId(dataCliente._id)
        })}

    , [])

    function editarCliente (){
const actualizarCliente = {
    id: id,
    nombre: nombre,
    estado: estado,
}
axios.post('/clienteeditado', actualizarCliente)
.then (res =>{alert(res.data)})
.then (err =>{console.log(err)} )
    }
   

    return(
        <div className="container" > 
     <div className="row"> 
        <h2 className="mt-4">Cambiar Estado</h2>
        </div>

        <div className="row"> 
        <div className="col-sm-6 offset-3">
      
        <div className="mb-3">
             <label htmlFor="nombre" className="form-label">Nombre</label>
             <input type="text" className="form-control" value={nombre} onChange={(e)=>(setNombre(e.target.value))} ></input>
        
        </div>
   

        <div className="mb-3">
             <label htmlFor="estado" className="form-label">Estado</label>
             <input type="text" className="form-control" value={estado} onChange={(e)=>(setEstado(e.target.value))} ></input>
        
        </div>
        <button  onClick={editarCliente} className="btn btn-success">Guardar Cambios</button>
        </div>
        </div>
        </div>
    )
}
export default Editarcliente