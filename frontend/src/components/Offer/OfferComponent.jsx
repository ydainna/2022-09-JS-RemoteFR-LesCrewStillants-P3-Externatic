import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "@utils/instance";
import offerData from "@services/offerData";
import Heart from "@assets/icons/Heart.svg";
import "./OfferComponent.scss";

function OfferComponent({ offer }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [company, setCompany] = useState([]);
  const [offers, setOffers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/offers/${id}`)

      .then((result) => {
        setOffers(result.data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="container-offer">
      <section className="banner_job-offer">
        <div className="title_job-offer">
          <h2>{offers.title}</h2>
          <h3>{company.name}</h3>
          <h3>{offers.localisation}</h3>
          <p>{offers.type_of_contract}</p>
          <p>{offerData[0].compensation}</p>
          <p>{offerData[0].schedule}</p>
        </div>
        <div className="buttons-offer">
          <button className="button-offer" type="button">
            Postuler
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
      </section>
      <section className="description_job-offer">
        <h2>Description du poste</h2>
        <p>{offers.job_description}</p>
        <h2>Description de l'entreprise</h2>
        <p>{company.description}</p>
        <div className="align-offer">
          <button className="button-offer" type="button">
            Voir l'entreprise
          </button>
        </div>
        <h2>Votre mission</h2>
        <p>{offers.mission}</p>
        <h2>Profil et expérience souhaités</h2>
        <p>{offers.seeked_profile}</p>
        <h2>Avantages</h2>
        <p>{offers.complementary_info}</p>
        <div className="align-offer">
          <button className="button-offer" type="button">
            Postuler
          </button>
        </div>
      </section>
    </section>
  );
}

export default OfferComponent;
