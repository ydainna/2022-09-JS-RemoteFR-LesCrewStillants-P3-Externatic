import { useState, useEffect } from "react";
import instance from "@utils/instance";
import Notify from "@utils/notification";
import axios from "axios";

import "./SearchParameters.scss";

export default function SearchParameters({ id }) {
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

  const handleRemoteChange = (e) => {
    const { value } = e.target;
    setInfo({ ...info, isRemote: value === "true" });
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
    <section id="searchParameters">
      <form onSubmit={handleSubmit}>
        <h1>Critères de recherche</h1>
        <label>
          Contrat{" "}
          <select
            name="type_of_contract"
            id="contrat-select"
            value={info.type_of_contract}
            onChange={handleChange}
          >
            <option value="">--Veuillez choisir une option--</option>
            <option value="Alternance">Alternance</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="Stage">Stage</option>
          </select>
        </label>
        <label>
          Date de Début{" "}
          <input
            type="date"
            name="start_date"
            value={info.start_date ? info.start_date.split("T")[0] : ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Localisation{" "}
          <input
            type="text"
            name="localisation_job"
            value={info.localisation_job}
            onChange={handleChange}
          />
        </label>
        <label>
          Télétravail{" "}
          <select
            name="isRemote"
            id="teletravail-select"
            value={info.isRemote ? "true" : "false"}
            onChange={handleRemoteChange}
          >
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </select>
        </label>
        <label>
          Poste{" "}
          <input
            type="text"
            name="job"
            value={info.job}
            onChange={handleChange}
          />
        </label>
        <label>
          Technologies Principales{" "}
          <input
            type="text"
            name="technology"
            value={info.technology}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </section>
  );
}
