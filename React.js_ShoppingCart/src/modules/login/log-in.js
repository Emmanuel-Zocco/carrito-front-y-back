import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Cartvip from '../../Carts/CartVip';
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = (event) => {
    if (event.target[0].value == "" || event.target[1].value == ""){
      event.preventDefault();
    }
  };
  
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Log-In</h4>
      <Form action="/clientevip" onSubmit={onSubmit}>
      <Form.Group>
      
  
          <Form.Label >Nombre:</Form.Label>
          <Form.Control type="text" 
                        placeholder="nombre"
                        />
                        
        </Form.Group>
        <Form.Group>
          <Form.Label>password:</Form.Label>
          <Form.Control type="text" 
                        placeholder="password" />
        </Form.Group>
       
        <button type="submit">
        login
      </button>
        
        
      </Form>
    </div>
  );
}

