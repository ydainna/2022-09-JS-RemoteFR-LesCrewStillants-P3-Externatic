import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notify from "@utils/notification";
import instance from "@utils/instance";

import "./Parameters.scss";

export default function Parameters({ id }) {
  const navigate = useNavigate();
  const handleDelete = () => {
    instance.delete(`/users/${id}`).then(() => navigate("/login"));
  };

  const [passwordUpdate, setPasswordUpdate] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordUpdate({ ...passwordUpdate, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = passwordUpdate;
    if (password === "" || confirmPassword === "") {
      Notify.error("Veuillez remplir tous les champs");
      return;
    }

    if (password !== confirmPassword) {
      Notify.error("Les mots de passe ne correspondent pas");
      return;
    }
    instance
      .put("/users/edit-password/:id", passwordUpdate)
      .then(() => Notify.success("Votre mot de passe a bien été modifié"))
      .catch((err) =>
        console.error(err, Notify.error("Une erreur est survenue ❌"))
      );
  };
  return (
    <section id="parameters">
      <h1>Paramètres</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">
          Mot de passe
          <input
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirmer votre mot de passe
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Changer de mot de passe</button>
      </form>
      <button type="button" className="delete-button" onClick={handleDelete}>
        Supression du compte
      </button>
    </section>
  );
}
