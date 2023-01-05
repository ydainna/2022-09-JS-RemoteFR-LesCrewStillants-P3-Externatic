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
          <span
            className={`"burger-bar" ${
              showLinks ? "burger-bar-checked" : "burger-bar"
            }`}
          />
        </button>
        <button type="button" className="button">
          <h1>ESPACE CANDIDAT</h1>
        </button>
      </div>
      <nav>
        <ul className={`${showLinks ? "show-nav " : "hide-nav"}`}>
          <li className="list">OFFRES D'EMPLOI</li>
          <li className="list">CANDIDATS</li>
          <li className="list">ENTREPRISES</li>
          <li className="list">QUI SOMMES-NOUS ?</li>
          <li className="list">OUTILS</li>
          <li className="list">BLOG</li>
          <li className="list">CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
