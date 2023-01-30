import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo-Externatic.svg";

import "./Header.scss";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const reloadInfo = () => {
    if (token !== null) {
      return navigate("/profile");
    }

    return navigate("/login");
  };

  return (
    <header>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button type="button" className="burger" onClick={handleShowLinks}>
          <span
            className={`"burger-bar" ${
              showLinks ? "burger-bar-checked" : "burger-bar"
            }`}
          />
        </button>
        <button type="button" className="button" onClick={reloadInfo}>
          <h1>ESPACE CANDIDAT</h1>
        </button>
      </div>
      <nav>
        <ul className={`${showLinks ? "show-nav " : "hide-nav"}`}>
          <li className={`${showLinks ? "list liShown" : "list"}`}>
            <Link to="/offers">OFFRES D'EMPLOI</Link>
          </li>
          <li className={`${showLinks ? "list liShown" : "list"}`}>
            <a
              href="https://www.externatic.fr/candidat/"
              target="_blank"
              rel="noreferrer"
            >
              CANDIDATS
            </a>
          </li>
          <li className={`${showLinks ? "list liShown" : "list"}`}>
            <a
              href="https://www.externatic.fr/entreprise/"
              target="_blank"
              rel="noreferrer"
            >
              ENTREPRISES
            </a>
          </li>
          <li className={`${showLinks ? "list liShown" : "list"}`}>
            <a
              href="https://www.externatic.fr/qui-sommes-nous/"
              target="_blank"
              rel="noreferrer"
            >
              QUI SOMMES-NOUS ?
            </a>
          </li>
          <li className={`${showLinks ? "list liShown" : "list"}`}>
            <a
              href="https://www.externatic.fr/grille-des-salaires-2022/"
              target="_blank"
              rel="noreferrer"
            >
              OUTILS
            </a>
          </li>
          <li className={`${showLinks ? "list liShown" : "list"}`}>
            <a
              href="https://www.externatic.fr/blog/"
              target="_blank"
              rel="noreferrer"
            >
              BLOG
            </a>
          </li>
          <li className={`${showLinks ? "list liShown" : "list"}`}>
            <a
              href="https://www.externatic.fr/contact/"
              target="_blank"
              rel="noreferrer"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
