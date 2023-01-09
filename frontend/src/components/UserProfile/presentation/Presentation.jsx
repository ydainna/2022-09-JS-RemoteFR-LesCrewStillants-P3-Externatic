import avatarTemoin from "@assets/avatar/avatarTemoin.png";

import "./Presentation.scss";

export default function Presentation() {
  return (
    <section id="presentation">
      <h1>Présentation</h1>
      <div>
        <img src={avatarTemoin} alt="Avatar Témoin" />

        <button type="button">Mettre à jour la photo</button>
      </div>

      <p>
        Civilité{" "}
        <select name="civility" id="civility-select">
          <option value="">--Veuillez choisir une option--</option>
          <option value="M">M</option>
          <option value="Mme">Mme</option>
        </select>
      </p>
      <p>
        Prénom <input type="text" />
      </p>
      <p>
        Nom <input type="text" />
      </p>
      <p>
        Téléphone <input type="tel" />
      </p>
      <p>
        Mail <input type="email" />
      </p>

      <button type="button">Enregistrer</button>
    </section>
  );
}
