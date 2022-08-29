import React, {useEffect, useState}from 'react';
import UsuarioIndividual from './clienteIndividual';
import axios from 'axios'


function ListaUsuario(){
    const [datausuarios, setdatausuario] = useState([]);
    
    useEffect(() => {
        
        axios.get('/obtenerusuarios')
        
        .then (res =>{console.log(res.data)
            console.log(res.data)
            setdatausuario(res.data)})
        .then (err =>{console.log(err)} )
            
      
          
        }, []);

const listaDeUsuarios = datausuarios.map(usuario=>{return <div><UsuarioIndividual usuario={usuario}/></div>})

    return(
    <div><h2>Lista de Clientes</h2>
    {listaDeUsuarios}
    </div>
)}

export default ListaUsuario