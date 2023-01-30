import React, { useState, useEffect } from "react";
import instance from "@utils/instance";
import "./CManagement.scss";
import stylo from "@assets/icons/Pencil.svg";
import oeil from "@assets/icons/Eye.svg";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";
import { Link } from "react-router-dom";

function CompanyManagement() {
  const [company, setComapany] = useState([]);
  const [offers, setOffers] = useState([]);
  const [filter, setFilter] = useState(company);
  const [filterOffre, setFilterOffre] = useState(offers);

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

  const handleSelect = (e) => {
    setFilter(
      company.filter((comp) => comp.user_id === parseInt(e.target.value, 10))
    );
    setFilterOffre(
      offers.filter((off) => off.user_id === parseInt(e.target.value, 10))
    );
  };

  return (
    <SpecialUsersLayout>
      <section id="company-management">
        <div className="companyManag">
          <div className="rectangle">
            <h4>Gestions des pages Entreprises</h4>
          </div>
        </div>

        <div className="button">
          <select
            onChange={handleSelect}
            className="select"
            name="filtre"
            id="filtre"
          >
            <option value="all">Entreprise</option>
            {company.map((companys) => (
              <option value={companys.user_id}>{companys.name}</option>
            ))}
          </select>

          <button type="submit" className="bu">
            Crée une nouvelle page entreprise
          </button>
        </div>

        {filter.map((companys) => (
          <div key={companys.id} className="infos">
            <img className="image" alt="#" src={companys.banner} />

            <div>
              <p>{companys.name}</p>
            </div>

            <div>
              <p className="secteur">{companys.sector}</p>
            </div>

            <div>
              <p>{companys.description}</p>
            </div>

            <div>
              <a href={companys.link}>{companys.link}</a>
            </div>

            <div>
              <img alt="#" className="icones" src={stylo} />
            </div>
          </div>
        ))}

        {filterOffre.map((offer) => (
          <div key={offers.user_id} className="tab">
            <div className="tableau1">
              <p>
                {offer.title} - {offer.localisation}
              </p>
              <div>
                <Link to={`/offers/${offer.id}`} target="_blank">
                  <img alt="#" className="icn" src={oeil} />
                </Link>
                <Link to={`/offerRegister/${offer.id}`} target="_blank">
                  <img alt="#" className="icn" src={stylo} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="end">
          {filter.length === 0 ? (
            ""
          ) : (
            <button type="submit" className="button_end">
              Ajoutez une offre
            </button>
          )}
        </div>
      </section>
    </SpecialUsersLayout>
  );
}

export default CompanyManagement;
