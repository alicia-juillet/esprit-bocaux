import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Esprit Bocaux, conserverie artisanale"
        className="logo"
      />
    </header>
  );
}
export default Header;
