import "./Menu.scss";
import store from "../../assets/homepage.jpg";
import canneryImg from "../../assets/cannery.jpg";
import productImg from "../../assets/product.jpg";
import { NavLink, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const images: Record<string, string> = {
    "/": store,
    "/cannery": canneryImg,
    "/product": productImg,
  };
  const currentImage = images[location.pathname];

  return (
    <nav className="menu">
      <div className="menu-bar">
        <NavLink to="/">Accueil </NavLink>
        <NavLink to="/cannery">Conserverie</NavLink>
        <NavLink to="/product">Producteur en épicerie</NavLink>
        <NavLink to="/contact">Nous contacter</NavLink>
      </div>
      {currentImage && (
        <img
          src={currentImage}
          alt="Conserverie artisanale"
          className="picture-store
      "
        />
      )}
    </nav>
  );
}

export default Menu;
