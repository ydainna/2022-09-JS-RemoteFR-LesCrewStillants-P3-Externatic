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
  const [userOffer, setUserOffer] = useState([]);

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
          consultant_id: company.user_id,
        })
        .then(() => {
          setIsFavorite(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const getData = (decodedHeader) => {
    instance
      .get(`/user-offers/${decodedHeader.id}`)
      .then((result) => {
        setUserOffer(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (token !== null) {
      const decodedHeader = jwtDecode(token);

      return getData(decodedHeader);
    }
    return "";
  }, []);

  useEffect(() => {
    if (userOffer.length !== 0) {
      userOffer.forEach((currentoffer) => {
        if (currentoffer.offer_id === offer.id) {
          setIsFavorite(true);
        }
      });
    }
  }, [company]);

  return (
    <div className="card">
      {company.is_validated ? (
        <>
          <div className="card-personalize">
            <img
              className="card-header"
              src={company.banner}
              alt="company offer description"
            />
            <div className="card-body">
              <h2 className="card-title">{offer.title}</h2>
              <div className="card-description">
                {parse(offer.job_description)}
              </div>
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
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default CardOffer;
