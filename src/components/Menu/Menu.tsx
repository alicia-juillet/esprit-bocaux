import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="menu">
        <div
          className={`burger ${isOpen ? 'open' : ''}`}
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
      </nav>

      <div className={`menu-wrapper ${isOpen ? 'open' : 'hidden'}`}>
        <div className="menu-content">
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
            <NavLink to="/prestations" onClick={() => setIsOpen(false)}>
              Prestations
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Nous contacter
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Menu;
