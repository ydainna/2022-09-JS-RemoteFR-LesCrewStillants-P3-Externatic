import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "@utils/instance";

import Heart from "@assets/icons/Heart.svg";
import "./cardofferstyle.css";

function CardOffer({ offer }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [company, setCompany] = useState([]);

  useEffect(() => {
    instance
      .get(`/company/${offer.company_id}`)
      .then((result) => {
        setCompany(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-personalize">
        <div className="card-header">
          <img src={company.banner} alt="company offer description" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{offer.title}</h2>
          <p className="card-description">{offer.job_description}</p>
          <p className="card-contract">{offer.type_of_contract}</p>
        </div>
      </div>
      <div className="offerbuttons">
        <Link to={`/offers/${offer.id}`} key={offer.id}>
          <button className="card-button" type="button">
            Voir
          </button>
        </Link>

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
