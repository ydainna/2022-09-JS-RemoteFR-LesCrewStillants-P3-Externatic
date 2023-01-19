import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import instance from "@utils/instance";

import Notify from "@utils/notification";

import "../../components/Auth/Login/Login.scss";

export default function Login() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    instance
      .post("/login", loginUser)
      .then((res) => sessionStorage.setItem("token", res.data.token))
      .then(() => navigate("/profile"))
      .catch((err) =>
        console.error(err, Notify.error("Wrong informations ! ❌"))
      );
  };

  return (
    <div className="connexion">
      <div className="rectangle">
        <p className="texte">Connexion : </p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email : </label>
          <input
            className="input-mail"
            type="email"
            name="email"
            onChange={handleChangeLogin}
            required
          />
          <br />
          <br />
          <label htmlFor="mdp">Mot De Passe : </label>
          <input
            className="input-mdp"
            type="password"
            name="password"
            onChange={handleChangeLogin}
            required
          />
          <a href="https://support.google.com/accounts/answer/7682439?hl=fr">
            Mot de passe oublié
          </a>
          <div className="button">
            <button type="submit">Se connecter</button>
            <Link to="/register">
              <button type="submit">S'inscrire</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
