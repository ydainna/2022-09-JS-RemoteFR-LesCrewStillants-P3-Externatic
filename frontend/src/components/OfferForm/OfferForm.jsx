import React, { useState } from "react";

import offerData from "@services/offerData";
import Pencil from "@assets/icons/Pencil.svg";
import Check from "@assets/icons/Check.svg";
import "./OfferForm.scss";

function OfferForm() {
  const [nameJob, setNameJob] = useState(offerData.nameJob);
  const [nameEntreprise, setNameEntreprise] = useState(
    offerData.nameEntreprise
  );
  const [adressEntreprise, setAdressEntreprise] = useState(
    offerData.adressEntreprise
  );
  const [contrat, setContrat] = useState(offerData.contrat);
  const [compensation, setCompensation] = useState(offerData.compensation);
  const [schedule, setSchedule] = useState(offerData.schedule);
  const [descJob, setDescJob] = useState(offerData.descJob);
  const [descEntreprise, setDescEntreprise] = useState(
    offerData.descEntreprise
  );
  const [mission, setMission] = useState(offerData.mission);
  const [profil, setProfil] = useState(offerData.profil);
  const [advantages, setAdvantages] = useState(offerData.advantages);

  const [isEditing, setIsEditing] = useState(false);
  const [modif, setModif] = useState("Pencil");

  const images = {
    Pencil,
    Check,
  };

  function handleEdit() {
    setIsEditing(true);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditing(false);
    console.warn("infos envoyées");
    // Envoyer les données vers le backend ici
  }

  return (
    <section className="container">
      <section className="banner_job">
        <div className="title_job">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={nameJob}
                onChange={(event) => setNameJob(event.target.value)}
              />
              <input
                type="text"
                value={nameEntreprise}
                onChange={(event) => setNameEntreprise(event.target.value)}
              />
              <input
                type="text"
                value={adressEntreprise}
                onChange={(event) => setAdressEntreprise(event.target.value)}
              />
              <input
                type="text"
                value={contrat}
                onChange={(event) => setContrat(event.target.value)}
              />
              <input
                type="text"
                value={compensation}
                onChange={(event) => setCompensation(event.target.value)}
              />
              <input
                type="text"
                value={schedule}
                onChange={(event) => setSchedule(event.target.value)}
              />
              <button type="submit" onClick={handleEdit}>
                <img src={images[modif]} alt="Modif" />
              </button>
            </form>
          ) : (
            <>
              <h2>{nameJob}</h2>
              <h3>{nameEntreprise}</h3>
              <h3>{adressEntreprise}</h3>
              <p>{contrat}</p>
              <p>{compensation}</p>
              <p>{schedule}</p>
              <button className="pencil" type="submit" onClick={handleEdit}>
                <img src={images[modif]} alt="Modif" />
              </button>
            </>
          )}
        </div>
      </section>
      <section className="description_job">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <h2>Description du poste</h2>
            <input
              type="text"
              value={descJob}
              onChange={(event) => setDescJob(event.target.value)}
            />
            <h2>Description de l'entreprise</h2>
            <input
              type="text"
              value={descEntreprise}
              onChange={(event) => setDescEntreprise(event.target.value)}
            />
            <h2>Votre mission</h2>
            <input
              type="text"
              value={mission}
              onChange={(event) => setMission(event.target.value)}
            />
            <h2>Profil et expérience souhaités</h2>
            <input
              type="text"
              value={profil}
              onChange={(event) => setProfil(event.target.value)}
            />
            <h2>Avantages</h2>
            <input
              type="text"
              value={advantages}
              onChange={(event) => setAdvantages(event.target.value)}
            />
            <button type="submit" onClick={handleEdit}>
              <img src={images[modif]} alt="Modif" />
            </button>
          </form>
        ) : (
          <>
            <h2>Description du poste</h2>
            <p>{descJob}</p>
            <h2>Description de l'entreprise</h2>
            <p>{descEntreprise}</p>
            <h2>Votre mission</h2>
            <p>{mission}</p>
            <h2>Profil et expérience souhaités</h2>
            <p>{profil}</p>
            <h2>Avantages</h2>
            <p>{advantages}</p>
            <button className="pencil" type="submit" onClick={handleEdit}>
              <img src={images[modif]} alt="Modif" />
            </button>
          </>
        )}
        <button className="button_valid" type="submit" onClick={handleSubmit}>
          Envoyer les modifications
        </button>
      </section>
    </section>
  );
}

export default OfferForm;
