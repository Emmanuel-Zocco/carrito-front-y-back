import React, {useEffect, useState}from 'react';
import clienteIndividual from './clienteIndividual';
import axios from 'axios'


function ListaClientes(){
    const [clientState, setclientState] = useState([]);
    
    useEffect(() => {
        
        axios.get('api/client/agregarusuario')
        .then (res =>{console.log(res.data)})
        .catch (err =>{console.log(err)} )
            
      
          
        }, []);
    return(
    <div><h2>Lista de Clientes</h2>
    <clienteIndividual/>
    </div>
)}

export default ListaClientes