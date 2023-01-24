// import avatarTemoin from "@assets/avatar/avatarTemoin.png";

import "./Presentation.scss";

export default function Presentation({
  updateUser,
  handleFilesChange,
  inputRef,
  handleSubmit,
  handleChange,
  filesToUpload,
}) {
  return (
    <section id="presentation">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <h1>Présentation</h1>
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
          <p>{filesToUpload}</p>
        </div>
        <label>
          Civilité{" "}
          <select
            name="civility"
            id="civility-select"
            value={updateUser.civility}
            onChange={handleChange}
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
            value={updateUser.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
    </section>
  );
}
