import React, { useState } from "react";

import Heart from "@assets/icons/Heart.svg";
import "./cardofferstyle.css";

function CardOffer({ offer }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="card">
      <div className="card-personalize">
        <div className="card-header">
          <img src={offer.img} alt="company offer description" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{offer.name}</h2>
          <p className="card-description">{offer.desc}</p>
          <p className="card-contract">{offer.contrat}</p>
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
