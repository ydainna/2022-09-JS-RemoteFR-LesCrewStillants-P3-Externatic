import React, { useState, useEffect } from "react";
import instance from "@utils/instance";
import CardOffer from "../../components/Offers/CardOffer";
import "../../components/Offers/offerlist.css";

function OfferList() {
  const contractsTypeArray = [
    { name: "CDD", id: 1 },
    { name: "CDI", id: 2 },
    { name: "Alternance", id: 3 },
    { name: "Stage", id: 4 },
  ];

  const [offers, setOffers] = useState([]);
  const [contract, setContract] = useState("All");
  const [localisation, setLocalisation] = useState("All");

  const handleSelectContract = (e) => {
    setContract(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.checked) {
      setOffers(offers.filter((offer) => offer.remote));
    } else {
      setOffers(offers);
    }
  };

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
    <div>
      <header>
        <h1>Offres d'emploi</h1>
      </header>
      <div className="wrapper">
        <div className="filters">
          <input
            type="text"
            className="search-input"
            placeholder="🔎 Type to search"
          />

          <select
            className="select-localisation"
            name="offer"
            onChange={(e) => setLocalisation(e.target.value)}
          >
            <option value="All">Localisation</option>
            <option value={localisation}>Paris</option>
            <option value={localisation}>Toulouse</option>
            <option value={localisation}>Marseille</option>
          </select>

          <select
            className="select-contract"
            name="offer"
            onChange={handleSelectContract}
          >
            <option value="">Contrats</option>
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
              className="remote-checkbox"
              name="checkbox"
              id=""
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="offers-cards">
          <div className="cards">
            {offers
              .filter(
                (offer) =>
                  offer.type_of_contract === contract || contract === ""
              )
              .map((offer) => (
                <CardOffer key={offer.id} offer={offer} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferList;
