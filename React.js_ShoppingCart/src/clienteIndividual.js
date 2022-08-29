import React from 'react'


function UsuarioIndividual({usuario}){
    console.log(usuario)
    return(
    <div className='container'>
     <div className='row'>
        <ul className='list-group'>
           
            <li className='list-group-item'>{usuario.nombre}</li>
            <li className='list-group-item'>{usuario.edad}</li>
            <li className='list-group-item'>{usuario.estado}</li>
            <li className='list-group-item'>{usuario.idusuario}</li>
        </ul>
        <button className=' btn btn-success'>Editar</button>
        <button className=' btn btn-success-danger'>Borrar</button>
        <hr className='mt-4'></hr>
        </div>        
    </div>
)}

export default UsuarioIndividual