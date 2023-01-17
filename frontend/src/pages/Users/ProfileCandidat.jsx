import { useState } from "react";
import avatarTemoin from "@assets/avatar/avatarTemoin.png";
import cvExp from "@assets/cv/cvExp.png";
import "@components/UserProfile/ProfileCandidat.scss";

export default function ProfileCandidat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="container_profile">
      <h1>Profil Candidat</h1>
      <section className="candidat_resume">
        <div className="candidat_presentation">
          <img className="avatar" src={avatarTemoin} alt="Avatar Témoin" />
          <div className="description">
            <p>Prénom et Nom</p>
            <p>Localisation</p>
            <p>Email</p>
            <p>Téléphone</p>
          </div>
        </div>
        <div className="candidat_titre">Développeur Web et Web mobile</div>
        <button
          type="button"
          className="button_cv"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Fermer" : "Voir le CV"}
        </button>
        {isOpen && (
          <div className="modal">
            <img src={cvExp} className="modal" alt="Cv" />
          </div>
        )}
      </section>
      <section className="candidat_souhaits">
        <div className="boxes">
          <div className="box1">
            <p>Situation actuelle :</p>
          </div>
          <div className="box2">
            <p>Recherche active</p>
          </div>
          <div className="box3">
            <p>Critères de recherche :</p>
          </div>
          <div className="box4">
            <p>Type de contrat :</p>
            <p>Date de début :</p>
            <p>Localisation :</p>
            <p>Télétravail souhaité</p>
            <p>Poste recherché :</p>
            <p>Technos :</p>
          </div>
        </div>
      </section>
      <button type="button" className="contact_button">
        Contacter
      </button>
    </section>
  );
}
