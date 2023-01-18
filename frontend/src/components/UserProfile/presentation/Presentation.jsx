import avatarTemoin from "@assets/avatar/avatarTemoin.png";

import "./Presentation.scss";

export default function Presentation() {
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
          <select name="civility" id="civility-select">
            <option value="">--Veuillez choisir une option--</option>
            <option value="M">M</option>
            <option value="Mme">Mme</option>
          </select>
        </label>
        <label>
          Prénom <input type="text" />
        </label>
        <label>
          Nom <input type="text" />
        </label>
        <label>
          Téléphone <input type="tel" />
        </label>
        <label>
          Mail <input type="email" />
        </label>

        <button type="button">Enregistrer</button>
      </form>
    </section>
  );
}
