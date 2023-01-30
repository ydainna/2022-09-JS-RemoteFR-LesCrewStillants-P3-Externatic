import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notify from "@utils/notification";
import instance from "@utils/instance";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = registerUser;
    if (password !== confirmPassword) {
      Notify.error("Les mots de passe ne correspondent pas");
      return;
    }
    if (email === "" || password === "" || confirmPassword === "") {
      Notify.error("Veuillez remplir tous les champs");
      return;
    }
    instance
      .post("/register", registerUser)
      .then(() => Notify.success("Inscription réussie ! 🎉"))
      .then(() => navigate("/login"))
      .catch(() => Notify.error("Une erreur est survenue ❌"));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <section className="register">
        <h1>Inscription</h1>
        <form
          onSubmit={handleSubmit}
          name="register-form"
          className="register-form"
        >
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" name="email" id="email" />
          <label htmlFor="password">Mot de passe</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={handleChange}
          />
          <label htmlFor="confirmPassword">Confirmer votre mot de passe</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
          />
          <label className="showPassword" htmlFor="show-password">
            <input
              type="checkbox"
              name="show-password"
              id="show-password"
              onChange={togglePassword}
            />
            Show Password
          </label>
          <button className="btn-register" type="submit">
            Register
          </button>
        </form>
      </section>
    </main>
  );
}
