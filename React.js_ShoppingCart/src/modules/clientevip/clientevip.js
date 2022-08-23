
import { Link } from "react-router-dom";

const Clientevip = () => {
  return (
    <div className="home-page">
      
      <div className="overlay">
        
        <div className="text-section">
          <h2>Las Mejores Ofertas</h2>
        
          <Link to="/vip" className="browse-button">
            Clientes VIP
          </Link>
          <Link to="/ofertas" className="browse-button">
            Ofertas especiales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clientevip;
