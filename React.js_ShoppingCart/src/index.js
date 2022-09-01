import React, { useEffect, useState } from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Cart from './Carts/Cart';
import reportWebVitals from './reportWebVitals';
import CartVip from './Carts/CartVip';
import CartOferta from './Carts/CartOferta';
import HomePage from './modules/Homepage/Home';



import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import * as mongoose from  'mongoose';
import AgregarUsuario from './Clientes/AgregarCliente';
import Clock from './modules/Reloj/Reloj';
import Clientevip from './modules/Clientevip/Clientevip'

import SimpleForm from './modules/Login/Log-in';
import EditarCliente from './Clientes/EditarCliente';
import ListaUsuario from './Clientes/ListaClientes';
import UsuarioIndividual from './Clientes/ClienteIndividual';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer'
import fruit from './assets/img/fruit.jpg'
import Login from './modules/Login/Log-in'
import Editarcliente from './Clientes/EditarCliente';

ReactDOM.render(
  <React.StrictMode>
  
    <BrowserRouter>

    <Header />
    
      
     
    <Routes>
  
    <Route  path="/" element={<HomePage />}> </Route>
    <Route  path="/productos" element={<Cart />}> </Route>  
    <Route path ="/vip" element={<CartVip />}> </Route>
    <Route path ="/ofertas" element={<CartOferta />}> </Route>
    <Route path ="/agregarCliente" element={<AgregarUsuario/>}> </Route>
    <Route path ="/clienteVip" element={<Clientevip />}> </Route>
    <Route path ="/login" element={<Login />}> </Route>
    <Route path ="/listaClientes" element={<ListaUsuario/>}> </Route>
   
    <Route path ="/editarCliente/:id" element={<Editarcliente />}> </Route>
    </Routes>
   
    </BrowserRouter>
    
   <Footer />
  </React.StrictMode>,
  
  document.getElementById('root')
);


  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
