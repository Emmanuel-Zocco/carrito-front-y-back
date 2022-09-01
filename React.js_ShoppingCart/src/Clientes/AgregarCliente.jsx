import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';


function AgregarCliente(){
    const [nombre, setNombre]= useState('')
    const [edad, setedad]= useState('')
    const [estado, setestado]= useState('')
   
   
    function agregarCliente(){
        var usuario = {
            nombre: nombre,
            edad: edad,
            estado: estado,
            idUsuario: uniqid(),
        }
        console.log(usuario)
        axios.post('/agregarCliente', usuario)
        .then (res =>{alert(res.data)})
        .then (err =>{console.log(err)} )
    }
    
    return(
    <div className="container" > 
     <div className="row"> 
        <h2 className="mt-4">Crear Cliente</h2>
        </div>

        <div className="row"> 
        <div className="col-sm-6 offset-3">
        <div className="mb-3">
             <label htmlFor="nombre" className="form-label">Nombre</label>
             <input type="text" className="form-control" value={nombre} onChange={(e)=>(setNombre(e.target.value))} ></input>
        
        </div>

        <div className="mb-3">
             <label htmlFor="edad" className="form-label">Edad</label>
             <input type="text" className="form-control" value={edad} onChange={(e)=>(setedad(e.target.value))} ></input>
        
        </div>

        <div className="mb-3">
             <label htmlFor="estado" className="form-label">Estado</label>
             <input type="text" className="form-control" value={estado} onChange={(e)=>(setestado(e.target.value))} ></input>
        
        </div>
        <button  onClick={agregarCliente} className="btn btn-success">Guardar usuario</button>
        </div>
        </div>
        </div>
)}

export default AgregarCliente