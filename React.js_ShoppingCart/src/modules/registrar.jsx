import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "./alert";
import Form from 'react-bootstrap/Form';

const Registrar =() => {
    const [nombre, setnombre] = useState ('')
    const [password, setpassword] = useState ('')
    const [alerta, setalerta] = useState ({})

    const handleSubmit = e => {
        e.preventDefault();
        if([nombre, password].includes('')){
            setalerta ({
                msg:'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        
    }
    const {msg} = alerta

    return (
        <div style={{ display: 'block', 
                      width: 700, 
                      padding: 30 }}>
          <h4>Log-In</h4>
          {msg = alerta && <Alerta alerta = {alerta} />}
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
      )
}
export default Registrar