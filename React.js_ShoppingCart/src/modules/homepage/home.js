
import "./homepage.css";
import fruit from '../../assets/img/fruit.jpg'
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
  

    <div className="home-page"  >
       <img  src = {fruit} width='100%' height='550px' />
      <div className="overlay" >
        <h1 className="store-name">Central de Compras</h1>
        <div className="text-section">
        <Link to="/ofertas" className="browse-button" >
            Ofertas especiales
          </Link>
         

        
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
