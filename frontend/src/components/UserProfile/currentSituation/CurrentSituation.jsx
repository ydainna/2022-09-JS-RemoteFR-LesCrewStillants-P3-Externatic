import { useState, useEffect } from "react";
import instance from "@utils/instance";
import Notify from "@utils/notification";
import axios from "axios";

import "./CurrentSituation.scss";

export default function CurrentSituation({ id }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    instance
      .get(`/information/${id}`)
      .then((result) => {
        setInfo(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleActiveSearchChange = (e) => {
    const { value } = e.target;
    setInfo({ ...info, isActiveSearch: value === "true" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(info);
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/information/${id}`, info, {
        withCredentials: true,
      })
      .then((res) => {
        console.warn(res);
      })
      .catch((err) =>
        console.error(err, Notify.error("Mauvaises Informations! ❌"))
      );
    Notify.success("Vos informations ont été mises à jour!");
  };
  return (
    <section id="currentSituation">
      <form onSubmit={handleSubmit}>
        <h1>Situation Actuelle</h1>
        <div
          name="type_of_contract"
          id="contrat-select"
          value={info.isActiveSearch}
          onChange={handleActiveSearchChange}
        >
          <label>
            Recherche Active{" "}
            <input
              type="radio"
              name="isActiveSearch"
              value="true"
              checked={info.isActiveSearch ? "true" : ""}
            />
          </label>
          <label>
            Recherche Passive{" "}
            <input
              type="radio"
              name="isActiveSearch"
              value="false"
              checked={info.isActiveSearch ? "" : "false"}
            />
          </label>
        </div>

        <label className="actual_situation">
          Emploi actuel{" "}
          <input
            type="text"
            name="actual_situation"
            value={info.actual_situation}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </section>
  );
}
