import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Appvip from '../../Appcopy';

export default function Login() {
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Log-In</h4>
      <Form>
      <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text" 
                        placeholder="nombre" />
        </Form.Group>
        <Form.Group>
          <Form.Label>password:</Form.Label>
          <Form.Control type="text" 
                        placeholder="password" />
        </Form.Group>
       
       
        <Link to="/clientevip" className="browse-button">
            login
          </Link>
        
      </Form>
    </div>
  );
}

