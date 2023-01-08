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

      <p>Civilité</p>
      <p>Prénom</p>
      <p>Nom</p>
      <p>Téléphone</p>
      <p>Mail</p>

      <button type="button">Enregistrer</button>
    </section>
  );
}
