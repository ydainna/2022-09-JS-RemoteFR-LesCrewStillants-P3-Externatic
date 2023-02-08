import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    if (filterCompanies.length !== 0) {
      setNameCompany(filterCompanies[0].name);
      setNameSector(filterCompanies[0].sector);
      setNameDescription(filterCompanies[0].description);
      setNameLink(filterCompanies[0].link);
    }
  }, [filterCompanies]);

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
      .put(`/company/${filterCompanies[0].id}`, {
        name: nameCompany,
        sector: nameSector,
        description: nameDescription,
        link: nameLink,
        siret: filterCompanies[0].siret,
        logo: filterCompanies[0].logo,
        banner: filterCompanies[0].banner,
        contact_name: filterCompanies[0].contact_name,
        user_id: filterCompanies[0].user_id,
        address_id: filterCompanies[0].address_id,
      })
      .then(() => {
        setCompanies(
          companies.map((company) =>
            company.id === filterCompanies[0].id
              ? {
                  ...filterCompanies[0],
                  name: nameCompany,
                  sector: nameSector,
                  description: nameDescription,
                  link: nameLink,
                }
              : company
          )
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleNewOffer(event) {
    event.preventDefault();
    instance
      .post(`/offers`, {
        title: "Nom du poste",
        localisation: "Localisation du poste",
        type_of_contract: "Type de contrat",
        compensation: "Salaire",
        schedule: "Horaires",
        job_description: "Description du poste",
        mission: "Description des missions",
        seeked_profile: "Profil recherché",
        complementary_info: "Autres précisions ou avantages",
        company_id: filterCompanies[0].id,
        user_id: filterCompanies[0].user_id,
      })
      .then(() => {
        setFilterOffers(offers);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
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
          <option value="all">Choisir une entreprise</option>
          {companies.map((company) => (
            <option value={company.user_id}>{company.name}</option>
          ))}
        </select>
        <button type="submit" className="bu">
          Créer une nouvelle page entreprise
        </button>
      </div>

      {filterCompanies.map((company) => {
        if (isEditing) {
          return (
            <form key={company.id} className="infos" onSubmit={handleSubmit}>
              <img className="image" alt="#" src={company.banner} />
              <textarea
                type="textarea"
                value={nameCompany}
                rows={5}
                onChange={(event) => setNameCompany(event.target.value)}
              />
              <textarea
                type="textarea"
                value={nameSector}
                rows={5}
                onChange={(event) => setNameSector(event.target.value)}
              />
              <textarea
                type="textarea"
                value={nameDescription}
                rows={5}
                onChange={(event) => setNameDescription(event.target.value)}
              />
              <textarea
                type="textarea"
                value={nameLink}
                rows={5}
                onChange={(event) => setNameLink(event.target.value)}
              />
              <button
                type="submit"
                className="valid"
                onClick={() => {
                  handleEdit();
                  handleSubmit();
                }}
              >
                <img alt="Modif" src={images[modif]} />
              </button>
            </form>
          );
        }
        return (
          <form className="infos">
            <img alt="#" src={company.banner} />
            <div className="column">
              <h3>{nameCompany}</h3>
              <p>{nameDescription}</p>
              <a href={`${nameLink}`}>{nameLink}</a>
            </div>
            <h3 className="sector">{nameSector}</h3>
            <button className="valid" type="button" onClick={handleEdit}>
              <img src={images[modif]} alt="Modif" />
            </button>
          </form>
        );
      })}

      {filterOffers.map((offer) => (
        <table key={offers.user_id}>
          <tr>
            <th>{offer.title}</th>
            <th>{offer.localisation}</th>
            <div>
              <th>
                <Link to={`/offers/${offer.id}`} target="_blank">
                  <img alt="#" className="icn" src={oeil} />
                </Link>
              </th>
              <th>
                <Link to={`/offerRegister/${offer.id}`} target="_blank">
                  <img alt="#" className="icn" src={Pencil} />
                </Link>
              </th>
            </div>
          </tr>
        </table>
      ))}

      <div className="end">
        {filterCompanies.length === 0 ? (
          ""
        ) : (
          <button type="submit" className="add_offer" onClick={handleNewOffer}>
            Ajoutez une offre
          </button>
        )}
      </div>
    </section>
  );
}
export default CompanyManagement;
