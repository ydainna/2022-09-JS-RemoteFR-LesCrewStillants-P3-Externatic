import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "@utils/instance";

import eye from "@assets/icons/Eye.svg";
import "../../components/Company/company.scss";

export default function Company() {
  const [company, setCompany] = useState([]);
  const [offers, setOffers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/company/${id}`)
      .then((result) => {
        setCompany(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    instance
      .get("/offers")
      .then((result) => {
        setOffers(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <section key={company.id} className="entreprise">
        <img src={company.banner} alt="Entreprise" />
        <div className="presentation_entreprise">
          <div className="name_entreprise">
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <a href={`${company.link}`} target="_blank" rel="noreferrer">
              Voir le site de l'entreprise
            </a>
          </div>
        </div>
        <h3>{company.sector}</h3>
      </section>
      <section className="offres_entreprise">
        <h2 className="Liste_offres">Les offres de l'entreprise</h2>
        {offers
          .filter((offer) => offer.company_id === company.id)
          .map((offer) => (
            <p key={offer.id}>
              <span>
                {offer.title} - {offer.localisation}
              </span>
              <Link to={`/offers/${offer.id}`}>
                <img src={eye} alt="Look icon" />
              </Link>
            </p>
          ))}
      </section>
    </>
  );
}
