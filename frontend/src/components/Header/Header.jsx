import { useState } from "react";
import "./Header.scss";
import logo from "../../assets/Logo-Externatic.svg";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
        <button type="button" className="burger" onClick={handleShowLinks}>
          <span className="burger-bar" />
        </button>
        <button type="button" className="button">
          <h1>ESPACE CANDIDAT</h1>
        </button>
      </div>
      <nav>
        <ul className={`${showLinks ? "show-nav " : "hide-nav"}`}>
          <li>OFFRES D'EMPLOI</li>
          <li>CANDIDATS</li>
          <li>ENTREPRISES</li>
          <li>QUI SOMMES-NOUS ?</li>
          <li>OUTILS</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
