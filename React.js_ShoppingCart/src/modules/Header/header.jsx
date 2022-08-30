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
            to="#"
            // toggle cart on click
            onClick={() => {
              props.setShowCart((prevShowCart) => !prevShowCart);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="cart-icon"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>

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
