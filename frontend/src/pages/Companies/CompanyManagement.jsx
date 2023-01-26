import React, { useState, useEffect } from "react";
import instance from "@utils/instance";
import "./CManagement.scss";
import triangle from "@assets/icons/Triangle.svg";
import stylo from "@assets/icons/Pencil.svg";
import oeil from "@assets/icons/Eye.svg";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

function CompanyManagement() {
  const [company, setComapany] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    instance
      .get(`/company`)
      .then((result) => {
        setComapany(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
    <SpecialUsersLayout>
      <section id="company-management">
        <div className="companyManag">
          <div className="rectangle">
            <h4>Validation des pages Entreprises</h4>
          </div>
        </div>

        <div className="button">
          <button type="submit" className="bu">
            Entreprise
            <img alt="#" className="tri" src={triangle} />
          </button>
          <button type="submit" className="bu">
            Crée une nouvelle page entreprise
          </button>
        </div>

        {company.map((companys) => (
          <div key={companys.id} className="infos">
            <img className="image" alt="#" src={companys.banner} />

            <div>
              <p>{companys.name}</p>
            </div>

            <div>
              <p className="secteur" />
            </div>

            <div>
              <p>{company.description}</p>
            </div>

            <div>
              <a href={company.link}>{company.link}</a>
            </div>

            <div>
              <img alt="#" className="icones" src={stylo} />
            </div>
          </div>
        ))}

        {offers.map((offer) => (
          <div key={offers.id} className="tab">
            <div className="tableau1">
              <p>
                {offer.title} - {offer.localisation}
              </p>
              <div>
                <img alt="#" className="icn" src={oeil} />
                <img alt="#" className="icn" src={stylo} />
              </div>
            </div>
          </div>
        ))}

        <div className="end">
          <button type="submit" className="button_end">
            Ajoutez une offre
          </button>
        </div>
      </section>
    </SpecialUsersLayout>
  );
}

export default CompanyManagement;
