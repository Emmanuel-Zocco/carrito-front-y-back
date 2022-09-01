import React from 'react'
import { Link } from "react-router-dom";


function ClienteIndividual({usuario}){
    console.log(usuario)
    return(
    <div className='container'>
     <div className='row'>
        <div className='col-sm-6'>
        <ul className='list-group'>
           
        <li className='list-group-item'>{usuario._id}</li>
            <li className='list-group-item'>{usuario.nombre}</li>
            <li className='list-group-item'>{usuario.edad}</li>
            <li className='list-group-item'>{usuario.estado}</li>
          
        </ul>
       <Link to={`/editarCliente/${usuario._id}`}> <li className=' btn btn-success'>Editar</li></Link>
        <button className=' btn btn-success-danger'>Borrar</button>
        <hr className='mt-4'></hr>
        </div>
        </div>        
    </div>
)}

export default ClienteIndividual