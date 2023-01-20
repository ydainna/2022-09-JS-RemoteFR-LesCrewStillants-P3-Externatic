import { useNavigate } from "react-router-dom";
import instance from "@utils/instance";

import "./Parameters.scss";

export default function Parameters({ id }) {
  const navigate = useNavigate();
  const handleDelete = () => {
    instance.delete(`/users/${id}`).then(() => navigate("/login"));
  };
  return (
    <section id="parameters">
      <h1>Paramètres</h1>
      <button type="button">Changer de mot de passe</button>
      <button type="button" onClick={handleDelete}>
        Supression du compte
      </button>
    </section>
  );
}
