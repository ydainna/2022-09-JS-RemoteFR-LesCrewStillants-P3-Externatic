import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";
import instance from "@utils/instance";
import Pencil from "@assets/icons/Pencil.svg";
import Check from "@assets/icons/Check.svg";
import oeil from "@assets/icons/Eye.svg";
import "./CManagement.scss";

function CompanyManagement() {
  const [modif, setModif] = useState("Pencil");
  const [companies, setCompanies] = useState([]);
  const [offers, setOffers] = useState([]);
  const [filterCompanies, setFilterCompanies] = useState(companies);
  const [filterOffers, setFilterOffers] = useState(offers);
  const [nameCompany, setNameCompany] = useState("");
  const [nameSector, setNameSector] = useState("");
  const [nameDescription, setNameDescription] = useState("");
  const [nameLink, setNameLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const images = {
    Pencil,
    Check,
  };

  useEffect(() => {
    instance
      .get(`/company`)
      .then((result) => {
        setCompanies(result.data);
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
    setFilterCompanies(
      companies.filter((comp) => comp.user_id === parseInt(e.target.value, 10))
    );
    setFilterOffers(
      offers.filter((off) => off.user_id === parseInt(e.target.value, 10))
    );
  };

  useEffect(() => {
    if (companies.length !== 0) {
      setNameCompany(companies[0].name);
      setNameSector(companies[0].sector);
      setNameDescription(companies[0].description);
      setNameLink(companies[0].link);
    }
  }, [companies]);

  function handleEdit() {
    setIsEditing(!isEditing);
    if (modif === "Pencil") {
      setModif("Check");
    } else {
      setModif("Pencil");
    }
  }

  function handleSubmit() {
    setIsEditing(false);
    instance
      .put(`/company/${companies[0].id}`, {
        name: nameCompany,
        sector: nameSector,
        description: nameDescription,
        link: nameLink,
        siret: companies[0].siret,
        logo: companies[0].logo,
        banner: companies[0].banner,
        contact_name: companies[0].contact_name,
        user_id: companies[0].user_id,
        address_id: companies[0].address_id,
      })
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <SpecialUsersLayout>
      <section id="company-management">
        <div className="companyManag">
          <div className="rectangle">
            <h4>Gestion des pages Entreprises</h4>
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
            {companies.map((company) => (
              <option value={company.user_id}>{company.name}</option>
            ))}
          </select>

          <button type="submit" className="bu">
            Crée une nouvelle page entreprise
          </button>
        </div>

        {filterCompanies.map((company) => {
          if (isEditing) {
            return (
              <form key={company.id} className="infos" onSubmit={handleSubmit}>
                <img className="image" alt="#" src={company.banner} />
                <input
                  type="text"
                  value={nameCompany}
                  onChange={(event) => setNameCompany(event.target.value)}
                />
                <input
                  type="text"
                  value={nameSector}
                  onChange={(event) => setNameSector(event.target.value)}
                />
                <input
                  type="text"
                  value={nameDescription}
                  onChange={(event) => setNameDescription(event.target.value)}
                />
                <input
                  type="text"
                  value={nameLink}
                  onChange={(event) => setNameLink(event.target.value)}
                />
                <button
                  type="submit"
                  onClick={() => {
                    handleEdit();
                    handleSubmit();
                  }}
                >
                  <img alt="modif" className="icones" src={images[modif]} />
                </button>
              </form>
            );
          }
          return (
            <>
              <form className="infos">
                <img className="image" alt="#" src={company.banner} />
                <p>{nameCompany}</p>
                <p>{nameSector}</p>
                <p>{nameDescription}</p>
                <p>{nameLink}</p>
              </form>
              <button className="button" type="submit" onClick={handleEdit}>
                <img src={images[modif]} alt="Modif" />
              </button>
            </>
          );
        })}

        {filterOffers.map((offer) => (
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
                  <img alt="#" className="icn" src={Pencil} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="end">
          {filterCompanies.length === 0 ? (
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
