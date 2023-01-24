import { useRef, useState, useEffect } from "react";
import instance from "@utils/instance";
import Notify from "@utils/notification";

// import avatarTemoin from "@assets/avatar/avatarTemoin.png";

import "./Presentation.scss";

export default function Presentation({ info }) {
  const inputRef = useRef();
  const [error, setError] = useState(false);
  const [filesToUpload, setFilesToUpload] = useState(info.avatar);

  const handleFilesChange = (file) => {
    setFilesToUpload(file.target.value.split("\\")[2]);
  };

  const [updateUser, setUpdateUser] = useState({
    civility: "",
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
  });

  // function to register every change from the form in the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  // function to send the form value to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateUser.email === "") {
      Notify.error("Veuillez renseigner une addresse mail.");
      setError(true);
      return;
    }

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    // post de l'image done ✅
    instance
      .post(`${import.meta.env.VITE_BACKEND_URL}/uploads/avatar`, formData)
      .then((res) => {
        console.warn(res.data);
      })
      .catch((err) => console.error(err));

    instance
      .put(`/users/${info.id}`, { filesToUpload, updateUser })
      .catch((err) =>
        console.error(err, Notify.error("Mauvaises Informations! ❌"))
      );
    Notify.success("Vos informations ont été mises à jour!");
  };

  useEffect(() => {
    setUpdateUser([info][0]);
  }, [info]);

  return (
    <section id="presentation">
      <form encType="multipart/form-data">
        <h1>Avatar</h1>
        <div className="input_image">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/avatar/${
              updateUser.avatar
            }`}
            alt="Avatar"
          />
          <input
            type="file"
            style={{ display: "none" }}
            name="avatar"
            ref={inputRef}
            onChange={handleFilesChange}
          />
          <button
            type="button"
            className="custom_button"
            onClick={() => inputRef.current.click()}
          >
            Choisir une photo
          </button>
          {updateUser.avatar && <p>{updateUser.avatar.name}</p>}
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <h1>Présentation</h1>
        <label>
          Civilité{" "}
          <select
            name="civility"
            id="civility-select"
            value={updateUser.civility}
            onChange={handleChange}
            // style={{ display: "none" }}
          >
            <option value="">--Veuillez choisir une option--</option>
            <option value="M">M</option>
            <option value="Mme">Mme</option>
          </select>
        </label>
        <label>
          Prénom{" "}
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={updateUser.firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Nom{" "}
          <input
            type="text"
            name="lastname"
            placeholder="Nom"
            value={updateUser.lastname}
            onChange={handleChange}
          />
        </label>
        <label>
          Téléphone{" "}
          <input
            type="tel"
            name="phone_number"
            placeholder="0203040506"
            value={updateUser.phone_number}
            onChange={handleChange}
          />
        </label>
        <label>
          Mail{" "}
          <input
            type="email"
            name="email"
            placeholder="mail@mail.fr"
            className={error ? "error" : ""}
            value={updateUser.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
    </section>
  );
}
