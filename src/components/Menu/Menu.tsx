import "./Menu.scss";
import store from "../../assets/homepage.jpg";
import canneryImg from "../../assets/cannery.jpg";
import productImg from "../../assets/product.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const images: Record<string, string> = {
    "/": store,
    "/cannery": canneryImg,
    "/product": productImg,
  };
  const currentImage = images[location.pathname];

  return (
    <nav className="menu">
      <div
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-bar">
        <NavLink to="/">Accueil </NavLink>
        <NavLink to="/cannery">Conserverie</NavLink>
        <NavLink to="/product">Producteur en épicerie</NavLink>
        <NavLink to="/prestations">Prestations</NavLink>
        <NavLink to="/contact">Nous contacter</NavLink>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <div className="close-btn" onClick={() => setIsOpen(false)}>
            <span></span>
            <span></span>
          </div>

          <nav className="mobile-links">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Accueil
            </NavLink>
            <NavLink to="/cannery" onClick={() => setIsOpen(false)}>
              Conserverie
            </NavLink>
            <NavLink to="/product" onClick={() => setIsOpen(false)}>
              Producteur en épicerie
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Nous contacter
            </NavLink>
          </nav>
        </div>
      )}

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
