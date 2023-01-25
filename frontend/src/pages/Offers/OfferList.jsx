import React, { useState, useEffect } from "react";
import instance from "@utils/instance";
import CardOffer from "../../components/Offers/CardOffer";
import "../../components/Offers/offerlist.scss";

function OfferList() {
  const contractsTypeArray = [
    { name: "CDD", id: 1 },
    { name: "CDI", id: 2 },
    { name: "Alternance", id: 3 },
    { name: "Stage", id: 4 },
  ];

  const localisationTypeArray = [
    { name: "Paris", id: 1 },
    { name: "Toulouse", id: 2 },
    { name: "Marseille", id: 3 },
    { name: "Lille", id: 4 },
  ];

  const [offers, setOffers] = useState([]);
  const [contract, setContract] = useState("All");
  const [localisation, setLocalisation] = useState("All");
  const [isRemote, setIsRemote] = useState(0);
  const [search, setSearch] = useState("");

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
    <section id="offer-list">
      <h1>Offres d'emploi</h1>
      <div className="wrapper">
        <div className="filters">
          <input
            type="text"
            className="search-input"
            placeholder="🔎 Type to search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select-localisation"
            name="offer"
            onChange={(e) => setLocalisation(e.target.value)}
          >
            <option value="All">Localisation</option>
            {localisationTypeArray.map((loc) => (
              <option key={loc.id} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>

          <select
            className="select-contract"
            name="offer"
            onChange={(e) => setContract(e.target.value)}
          >
            <option value="All">Contrats</option>
            {contractsTypeArray.map((contrat) => (
              <option key={contrat.id} value={contrat.name}>
                {contrat.name}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="remote">Show only Remote </label>
            <input
              type="checkbox"
              className="available-checkbox"
              name="checkbox"
              id=""
              onClick={() => setIsRemote(isRemote === 0 ? 1 : 0)}
            />
          </div>
        </div>
        <div className="offers-cards">
          <div className="cards">
            {offers
              .filter(
                (offer) =>
                  (offer.type_of_contract === contract || contract === "All") &&
                  (offer.localisation === localisation ||
                    localisation === "All") &&
                  (offer.isRemote === isRemote || isRemote === 0) &&
                  offer.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((offer) => (
                <CardOffer key={offer.id} offer={offer} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferList;
