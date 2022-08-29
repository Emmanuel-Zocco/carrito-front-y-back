import React, { useEffect, useState } from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appvip from './Appcopy';
import AppOferta from './App3';
import HomePage from './modules/homepage/home';
import Registrar from './modules/registrar';


import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import * as mongoose from  'mongoose';
import AgregarUsuario from './agregarUsuario';
import Clock from './modules/clock/reloj';
import Clientevip from './modules/clientevip/clientevip'

import SimpleForm from './modules/login/log-in';
import EditarCliente from './editarCliente';
import ListaUsuario from './listaClientes';
import UsuarioIndividual from './clienteIndividual';
import Header from './modules/Header/header';
import Footer from './modules/Footer/footer'
import fruit from './assets/img/fruit.jpg'
import Login from './modules/login/log-in'

ReactDOM.render(
  <React.StrictMode>
  
    <BrowserRouter>

    <Header />
    
      
     
    <Routes>
  
    <Route  path="/" element={<HomePage />}> </Route>
    <Route  path="/productos" element={<App />}> </Route>  
    <Route path ="/vip" element={<Appvip />}> </Route>
    <Route path ="/ofertas" element={<AppOferta />}> </Route>
    <Route path ="/agregarUsuario" element={<AgregarUsuario/>}> </Route>
    <Route path ="/clientevip" element={<Clientevip />}> </Route>
    <Route path ="/login" element={<Login />}> </Route>
    <Route path ="/editarcliente" element={<ListaUsuario/>}> </Route>
    <Route path ="/listacliente" element={<UsuarioIndividual usuario={{nombre:"nombre",edad:10,estado:"vip"}} />}> </Route>
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
