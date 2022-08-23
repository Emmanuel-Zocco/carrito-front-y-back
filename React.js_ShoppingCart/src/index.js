import React, { useEffect, useState } from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appvip from './Appcopy';
import AppOferta from './App3';
import HomePage from './modules/homepage/home';


import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import * as mongoose from  'mongoose';
import AgregarUsuario from './agregarUsuario';
import Clock from './modules/clock/reloj';
import Clientevip from './modules/clientevip/clientevip'
import Formulario from './modules/login/log-in';
import SimpleForm from './modules/login/log-in';

ReactDOM.render(
  <React.StrictMode>
  <Clock></Clock>
    <BrowserRouter>
    
    <Routes>
   
    <Route  path="/" element={<HomePage />}> </Route>
    <Route  path="/clientes" element={<App />}> </Route>
    <Route path ="/vip" element={<Appvip />}> </Route>
    <Route path ="/ofertas" element={<AppOferta />}> </Route>
    <Route path ="/agregarUsuario" element={<AgregarUsuario/>}> </Route>
    <Route path ="/clientevip" element={<Clientevip />}> </Route>
    <Route path ="/login" element={<SimpleForm />}> </Route>
    
    </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>,
  
  document.getElementById('root')
);


  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
