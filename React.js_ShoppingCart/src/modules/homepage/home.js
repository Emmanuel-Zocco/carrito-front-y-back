import "./homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      
      <div className="overlay">
        <h1 className="store-name">Carrito de Compras</h1>
        <div className="text-section">
          <h2>Las Mejores Ofertas</h2>
          <Link to="/clientes" className="browse-button">
            Clientes
          </Link>

          <Link to="/ofertas" className="browse-button">
            Ofertas especiales
          </Link>

          <Link to="/login" className="browse-button">
           Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
