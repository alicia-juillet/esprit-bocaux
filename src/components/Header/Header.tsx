import logo from '../../assets/logo.png';
import Menu from '../Menu/Menu';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="img-container">
        <img
          src={logo}
          alt="Esprit Bocaux, conserverie artisanale"
          className="logo"
        />
      </div>
      <Menu />
    </header>
  );
}
export default Header;
