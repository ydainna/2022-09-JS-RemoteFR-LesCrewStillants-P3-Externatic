import { useState, useEffect } from "react";
import instance from "@utils/instance";
import Notify from "@utils/notification";

import "./Address.scss";
import axios from "axios";

export default function Address({ id }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    instance
      .get(`/address/${id}`)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/address/${id}`, info, {
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
    <section id="address">
      <form onSubmit={handleSubmit}>
        <h1>Adresse</h1>
        <div>
          <label>
            Numéro{" "}
            <input
              type="number"
              name="number_address"
              value={info.number_address}
              onChange={handleChange}
            />
          </label>
          <label>
            Rue{" "}
            <input
              type="text"
              name="street_name"
              value={info.street_name}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          Informations Complémentaires{" "}
          <input
            type="text"
            name="complementary_info"
            value={info.complementary_info}
            onChange={handleChange}
          />
        </label>
        <div>
          <label>
            Code Postal{" "}
            <input
              type="number"
              name="zipcode"
              value={info.zipcode}
              onChange={handleChange}
            />
          </label>
          <label>
            Ville{" "}
            <input
              type="text"
              name="city"
              value={info.city}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          Pays{" "}
          <input
            type="text"
            name="country"
            value={info.country}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </section>
  );
}
