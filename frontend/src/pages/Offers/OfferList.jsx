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

  const localisationTypeArray = [
    { name: "Paris", id: 1 },
    { name: "Toulouse", id: 2 },
    { name: "Marseille", id: 3 },
    { name: "Lille", id: 4 },
  ];

  const [offers, setOffers] = useState([]);
  const [contract, setContract] = useState("All");
  const [localisation, setLocalisation] = useState("All");

  const handleClick = (e) => {
    if (e.target.checked) {
      setOffers(offers.filter((offer) => offer.isRemote === 1));
    } else {
      setOffers(offers);
    }
  };

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    setOffers(
      offers.filter((offer) => offer.title.toLowerCase().includes(search))
    );
    if (search === "") {
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
            onChange={handleChange}
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
              onClick={handleClick}
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
                    localisation === "All")
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
