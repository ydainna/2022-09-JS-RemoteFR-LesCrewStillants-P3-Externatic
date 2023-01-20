import React, { useState, useEffect } from "react";
import instance from "@utils/instance";

import Heart from "@assets/icons/Heart.svg";
import "./cardofferstyle.css";

function CardOffer() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [offers, setOffers] = useState([]);
  // const [company, setCompany] = useState([]);
  // const [information, setInformation] = useState([]);

  useEffect(() => {
    instance
      .get("/offers")
      .get("/compagny")
      .get("/information")
      .then((result) => {
        setOffers(result.data);
        // setCompany(result.data);
        // setInformation(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-personalize">
        <div className="card-header">
          {/* <img src={company.banner} alt="company offer description" /> */}
        </div>
        <div className="card-body">
          <h2 className="card-title">{offers.title}</h2>
          <p className="card-description">{offers.job_description}</p>
          {/* <p className="card-contract">{information.type_of_contract}</p> */}
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
