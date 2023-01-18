import { Link } from "react-router-dom";

import "../../components/Auth/Login/Login.scss";

export default function Login() {
  return (
    <div className="connexion">
      <div className="rectangle">
        <p className="texte">Connexion : </p>

        <form>
          <label htmlFor="email">Email : </label>
          <input className="input-mail" type="email" />
          <br />
          <br />
          <label htmlFor="mdp">Mot De Passe : </label>
          <input className="input-mdp" type="password" />
          <a href="https://support.google.com/accounts/answer/7682439?hl=fr">
            Mot de passe oublié
          </a>

          <div className="button">
            <Link to="/profile">
              <button type="submit">Se connecter</button>
            </Link>
            <Link to="/register">
              <button type="submit">S'inscrire</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
