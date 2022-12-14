import React, {useEffect, useState}from 'react';
import ClienteIndividual from './ClienteIndividual';
import axios from 'axios'


function ListaClientes(){
    const [datausuarios, setdatausuario] = useState([]);
    
    useEffect(() => {
        
        axios.get('/obtenerClientes')
        
        .then (res =>{console.log(res.data)
            console.log(res.data)
            setdatausuario(res.data)})
        .then (err =>{console.log(err)} )
            
      
          
        }, []);

const listaDeUsuarios = datausuarios.map(usuario=>{return <div><ClienteIndividual usuario={usuario}/></div>})

    return(
    <div><h2>Lista de Clientes</h2>
    {listaDeUsuarios}
    </div>
)}

export default ListaClientes