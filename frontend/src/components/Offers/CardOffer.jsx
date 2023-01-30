import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import jwtDecode from "jwt-decode";
import instance from "@utils/instance";

import Heart from "@assets/icons/Heart.svg";
import "./cardofferstyle.scss";

function CardOffer({ offer }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [company, setCompany] = useState([]);
  const token = sessionStorage.getItem("token");
  const [user, setUser] = useState(0);

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

  const reloadInfo = () => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return instance
        .get(`/users/${decodedHeader.id}`)
        .then((response) => {
          setUser(response.data.id);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return "";
  };

  useEffect(() => {
    reloadInfo();
  }, []);

  const handleLike = () => {
    console.warn(isFavorite);
    if (isFavorite) {
      instance
        .delete(`/uoffer/${user}/${offer.id}`)
        .then(() => {
          setIsFavorite(false);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      instance
        .post(`/uoffer`, {
          isFavorite: true,
          isApplied: false,
          user_id: user,
          offer_id: offer.id,
          consultant_id: 5,
        })
        .then(() => {
          setIsFavorite(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="card">
      <div className="card-personalize">
        <img
          className="card-header"
          src={company.banner}
          alt="company offer description"
        />
        <div className="card-body">
          <h2 className="card-title">{offer.title}</h2>
          <div className="card-description">{parse(offer.job_description)}</div>
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
          onClick={() => handleLike(offer.id)}
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
