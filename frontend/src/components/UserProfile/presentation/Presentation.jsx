import avatarTemoin from "@assets/avatar/avatarTemoin.png";

import "./Presentation.scss";

export default function Presentation({ info }) {
  return (
    <section id="presentation">
      <form>
        <h1>Présentation</h1>
        <div>
          <img src={avatarTemoin} alt="Avatar Témoin" />

          <button type="button">Mettre à jour la photo</button>
        </div>

        <label>
          Civilité{" "}
          <select name="civility" id="civility-select" value={info.civility}>
            <option value="">--Veuillez choisir une option--</option>
            <option value="M">M</option>
            <option value="Mme">Mme</option>
          </select>
        </label>
        <label>
          Prénom <input type="text" value={info.firstname} />
        </label>
        <label>
          Nom <input type="text" value={info.lastname} />
        </label>
        <label>
          Téléphone <input type="tel" value={info.phone_number} />
        </label>
        <label>
          Mail <input type="email" value={info.email} />
        </label>

        <button type="button">Enregistrer</button>
      </form>
    </section>
  );
}
