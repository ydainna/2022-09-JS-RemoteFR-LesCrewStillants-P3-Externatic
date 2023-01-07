import React, { useState } from "react";
import offerData from "@services/offerData";
import Heart from "@assets/icons/Heart.svg";
import HeartWhite from "@assets/icons/HeartWhite.svg";
import "./OfferComponent.scss";

function OfferComponent() {
  const [favoris, setFavoris] = useState("HeartWhite");

  const images = {
    Heart,
    HeartWhite,
  };

  function handleClick() {
    if (favoris === "HeartWhite") {
      setFavoris("Heart");
    } else {
      setFavoris("HeartWhite");
    }
  }

  return (
    <section className="container">
      <section className="banner_job">
        <div className="title_job">
          <h2>{offerData.nameJob}</h2>
          <h3>{offerData.nameEntreprise}</h3>
          <h3>{offerData.adressEntreprise}</h3>
          <p>{offerData.contrat}</p>
          <p>{offerData.compensation}</p>
          <p>{offerData.schedule}</p>
        </div>
        <div className="buttons">
          <button className="button" type="button">
            Postuler
          </button>
          <button className="heart" type="button" onClick={handleClick}>
            <img src={images[favoris]} alt="Logo Heart" />
          </button>
        </div>
      </section>
      <section className="description_job">
        <h2>Description du poste</h2>
        <p>{offerData.descJob}</p>
        <h2>Description de l'entreprise</h2>
        <p>{offerData.descEntreprise}</p>
        <button className="button" type="button">
          Voir l'entreprise
        </button>
        <h2>Votre mission</h2>
        <p>{offerData.mission}</p>
        <h2>Profil et expérience souhaités</h2>
        <p>{offerData.profil}</p>
        <h2>Avantages</h2>
        <p>{offerData.advantages}</p>
        <button className="button" type="button">
          Postuler
        </button>
      </section>
    </section>
  );
}

export default OfferComponent;
