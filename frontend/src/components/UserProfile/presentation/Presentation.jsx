import { useState, useEffect } from "react";

// import Notify from "@utils/notification";

import avatarTemoin from "@assets/avatar/avatarTemoin.png";

import "./Presentation.scss";

export default function Presentation({ info }) {
  console.warn(info);

  const [updateUser, setUpdateUser] = useState({
    civility: "",
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
  });

  console.warn(updateUser);

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  // function to send the form value to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (updateUser.email === "") {
    //   Notify.error("Please fill all the required fields");
    //   setError(true);
    //   return;
    // }
  };
  useEffect(() => {
    setUpdateUser(info);
  }, []);

  return (
    <section id="presentation">
      <form onSubmit={handleSubmit}>
        <h1>Présentation</h1>
        <div>
          <img src={avatarTemoin} alt="Avatar Témoin" />

          <button type="button">Mettre à jour la photo</button>
        </div>

        <label>
          Civilité{" "}
          <select
            name="civility"
            id="civility-select"
            value={info.civility}
            onChange={handleChange}
          >
            <option value="">--Veuillez choisir une option--</option>
            <option value="M">M</option>
            <option value="Mme">Mme</option>
          </select>
        </label>
        <label>
          Prénom{" "}
          <input type="text" value={info.firstname} onChange={handleChange} />
        </label>
        <label>
          Nom{" "}
          <input type="text" value={info.lastname} onChange={handleChange} />
        </label>
        <label>
          Téléphone{" "}
          <input type="tel" value={info.phone_number} onChange={handleChange} />
        </label>
        <label>
          Mail <input type="email" value={info.email} onChange={handleChange} />
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </section>
  );
}
