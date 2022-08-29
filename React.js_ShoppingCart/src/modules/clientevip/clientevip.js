
import { Link } from "react-router-dom";
import Header from "../Header/header";
 //Header.Logueado(true);
const Clientevip = () => {
 
  return (
    
    <div className="home-page">
     
      <div className="overlay">
        
        <div className="text-section">
          <h2>Las Mejores Ofertas</h2>
        
          <Link to="/vip" className="browse-button">
            Clientes VIP
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Clientevip;
