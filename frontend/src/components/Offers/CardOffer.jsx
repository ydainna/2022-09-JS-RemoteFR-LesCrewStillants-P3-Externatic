import React, { useState } from "react";

import Heart from "@assets/icons/Heart.svg";
import "./cardofferstyle.css";

function CardOffer({ img, name, desc, contrat }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="card">
      <div className="card-personalize">
        <div className="card-header">
          <img src={img} alt="blabla" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-description">{desc}</p>
          <p className="card-contract">{contrat}</p>
        </div>
      </div>
      <div className="offerbuttons">
        <button className="card-button" type="button">
          Voir
        </button>

        <button
          className="heart-offer"
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <img
            src={Heart}
            className={isFavorite ? "" : "greyHeart-offer"}
            alt="Logo Heart"
          />
        </button>
      </div>
    </div>
  );
}

export default CardOffer;
