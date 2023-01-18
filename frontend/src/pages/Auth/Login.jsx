import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "../../components/Auth/Login/Login.scss";

export default function Login() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
  });

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    instance
      .post("/login", loginUser)
      .then(() => navigate("/profile"))
      .catch((err) =>
        console.error(err, toast.error("Wrong informations ! ❌"))
      );
  };

  return (
    <div className="connexion">
      <ToastContainer
        theme="dark"
        autoClose={2000}
        position="bottom-center"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <div className="rectangle">
        <p className="texte">Connexion : </p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email : </label>
          <input
            className="input-mail"
            type="email"
            onChange={handleChangeLogin}
            required
          />
          <br />
          <br />
          <label htmlFor="mdp">Mot De Passe : </label>
          <input
            className="input-mdp"
            type="password"
            onChange={handleChangeLogin}
            required
          />
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
