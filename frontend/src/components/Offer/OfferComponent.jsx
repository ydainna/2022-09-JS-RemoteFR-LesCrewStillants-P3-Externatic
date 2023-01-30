import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "@utils/instance";
import parse from "html-react-parser";
import Heart from "@assets/icons/Heart.svg";
import "./OfferComponent.scss";

function OfferComponent() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [company, setCompany] = useState([]);
  const [offers, setOffers] = useState([]);
  const [descJob, setDescJob] = useState("");
  const [descEntreprise, setDescEntreprise] = useState("");
  const [mission, setMission] = useState("");
  const [profil, setProfil] = useState("");
  const [advantages, setAdvantages] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (offers.length !== 0) {
      setDescJob(offers.job_description);
      setMission(offers.mission);
      setProfil(offers.seeked_profile);
      setAdvantages(offers.complementary_info);
    }
  }, [offers]);
  useEffect(() => {
    if (company.length !== 0) {
      setDescEntreprise(company.description);
    }
  }, [company]);

  useEffect(() => {
    instance
      .get(`/offers/${id}`)
      .then((result) => {
        setOffers(result.data);
        // extract the company_id from the returned data
        const companyId = result.data.company_id;
        // make the second request using the company_id
        instance
          .get(`/company/${companyId}`)
          .then((results) => {
            setCompany(results.data);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section
      className="container-offer"
      style={{
        backgroundImage: `url(${company.banner})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="banner_job-offer">
        <div className="title_job-offer">
          <h2>{offers.title}</h2>
          <h3>{company.name}</h3>
          <h3>{offers.localisation}</h3>
          <p>{offers.type_of_contract}</p>
          <p>{offers.compensation}</p>
          <p>{offers.schedule}</p>
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
        {parse(descJob)}
        <h2>Description de l'entreprise</h2>
        {parse(descEntreprise)}
        <div className="align-offer">
          <Link to={`/companies/${company.id}`}>
            <button className="button-offer" type="button">
              Voir l'entreprise
            </button>
          </Link>
        </div>
        <h2>Votre mission</h2>
        {parse(mission)}
        <h2>Profil et expérience souhaités</h2>
        {parse(profil)}
        <h2>Avantages</h2>
        {parse(advantages)}
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
