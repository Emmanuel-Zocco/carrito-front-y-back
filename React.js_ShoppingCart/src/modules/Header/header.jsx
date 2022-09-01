import { Link } from "react-router-dom";
import "./header.css";
import React, {useEffect, useState}from 'react';


//function Logueado(log = false){
  //const [login, setLogin] = useState()
  //console.log("ACA")
  //return log;
//}

const Header = (props) => {
  console.log(window.location.href)
  return (
    <div className="nav-bar">
      <ul>
      {window.location.href === 'http://localhost:3000/clientevip?' ? <>
      <li className="nav-link home">
          <Link to="/">Home</Link>
        </li>
       
       
       
        <li className="nav-link">
          <Link
            to="/"
            // toggle cart on click
            onClick={() => {
              props.setShowCart((prevShowCart) => !prevShowCart);
            }}
          >
            <button className="btn btn-succes"><link rel="stylesheet" href="/" />Log-out</button>
            {props.count ? <p className="cart-count">{props.count}</p> : null}
          </Link>
        </li>
      </>:<>
        <li className="nav-link home">
          <Link to="/">Home</Link>
        </li>
       
        <li className="nav-linkb">
        <Link to="/productos" className="browse-button">
            Productos
          </Link>
        </li>
        <li className="nav-linkb">
        

        </li>
        <li className="nav-linkb">
        <Link to="/login" className="browse-button">
         Login
          </Link>

        </li>
       
       
      </>}
      </ul>
    </div>
  );
};

export default Header;
