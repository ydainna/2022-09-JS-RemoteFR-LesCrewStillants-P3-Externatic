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
    console.warn(companies);
    if (companies.length !== 0) {
      setNameCompany(companies[1].name);
      setNameSector(companies[1].sector);
      setNameDescription(companies[1].description);
      setNameLink(companies[1].link);
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
      .put(`/company/${companies[1].id}`, {
        name: nameCompany,
        sector: nameSector,
        description: nameDescription,
        link: nameLink,
        siret: companies[1].siret,
        logo: companies[1].logo,
        banner: companies[1].banner,
        contact_name: companies[1].contact_name,
        user_id: companies[1].user_id,
        address_id: companies[1].address_id,
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
                  <img alt="modif" className="valid" src={images[modif]} />
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
              <button className="valid" type="submit" onClick={handleEdit}>
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
            <button type="submit" className="add_offer">
              Ajoutez une offre
            </button>
          )}
        </div>
      </section>
    </SpecialUsersLayout>
  );
}
export default CompanyManagement;
